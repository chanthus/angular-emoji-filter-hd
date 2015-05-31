(function (App) {
    App.filter('emojiCodeToEmoji', function (emojiCodes) {

        var emojiCodesRegex = new RegExp("(^|\\s)?(" + Object.keys(emojiCodes).join("|") + ")(\\s|$)", "g");

        return function (input) {
            if (input === undefined) return;
            if (typeof input === "object") return input;

            return input.replace(emojiCodesRegex, function (match, g1, g2) {
                return ':' + emojiCodes[App.escapeRegExp(g2)] + ':';
            });
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