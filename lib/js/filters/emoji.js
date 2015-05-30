(function (App) {
    App.filter('emojiCodeToEmoji', function (emojiCodes) {

        var codesRegexCache = {};
        var codesKeys = Object.keys(emojiCodes);

        var replaceCodesWithText = function (input) {
            for (var i = codesKeys.length - 1; i >= 0; i--) {

                if (!codesRegexCache[i]) {
                    var regexPrefix = '(^|\\s)?';
                    var regexSuffix = '(\\s|$)';

                    codesRegexCache[i] = new RegExp(regexPrefix + '(' + codesKeys[i] + ')' + regexSuffix, "g");
                }

                var regex = codesRegexCache[i];

                if (regex.test(input)) {
                    input = input.replace(regex, ':' + emojiCodes[codesKeys[i]] + ':');
                }
            }

            return input;
        };

        return function (input) {
            if (input === undefined) return;
            if (typeof input === "object") return input;

            return replaceCodesWithText(input, false);
        };
    });

    App.filter('emoji', function (emojiMaps, $filter) {

        var emojiRegex = new RegExp(":(" + Object.keys(emojiMaps).join("|") + "):", "g");

        return function (input, replaceCode, isUnicode) {
            if (input === undefined) return;
            if (typeof input === "object") return input;

            if (replaceCode) {
                input = $filter('emojiCodeToEmoji')(input);
            }

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