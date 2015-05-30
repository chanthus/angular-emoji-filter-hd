(function (App) {
    App.filter('emoji', function (emojiMaps, emojiCodes) {

        var codesRegexCache = {};
        var codesKeys = Object.keys(emojiCodes);
        var emojiRegex = new RegExp(":(" + Object.keys(emojiMaps).join("|") + "):", "g");

        var replaceCodesWithText = function (input, htmlFriendly) {
            for (var i = codesKeys.length - 1; i >= 0; i--) {

                if (!codesRegexCache[i]) {
                    var regexPrefix = '(^|\\s)';
                    var regexSuffix = '(\\s|$)';
                    regexPrefix = htmlFriendly ? regexPrefix + '?' : regexPrefix;
                    regexSuffix = htmlFriendly ? regexSuffix + '?' : regexSuffix;

                    codesRegexCache[i] = new RegExp(regexPrefix + '(' + codesKeys[i] + ')' + regexSuffix, "g");
                }

                var regex = codesRegexCache[i];

                if (regex.test(input)) {
                    input = input.replace(regex, ':' + emojiCodes[codesKeys[i]] + ':');
                }
            }

            return input;
        };

        return function (input, isUnicode, htmlFriendly) {
            if (input === undefined) return;
            if (typeof input === "object") return input;

            input = replaceCodesWithText(input, htmlFriendly || false);

            if (isUnicode) {
                return input.replace(emojiRegex, function (match, text) {
                    return emojiMaps[App.escapeRegExp(text)].unicode;
                });
            } else {
                return input.replace(emojiRegex, function (match, text) {
                    return "<i class='emoji emoji_" + emojiMaps[App.escapeRegExp(text)].unescaped + "'></i>";
                });
            }
        };
    });
})(angular.module('cts.emoji'));