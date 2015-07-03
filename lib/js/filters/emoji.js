(function (App) {
    App.filter('emojiCodeToEmoji', function (emojiCodes) {

        var emojiCodesRegex = new RegExp("(^|\\s)(" + Object.keys(emojiCodes).join("|") + ")(?=$|\\s)", "g");

        return function (input) {
            if (input === undefined) return;
            if (typeof input === "object") return input;

            return input.replace(emojiCodesRegex, function (match, g1, g2) {
                return (g1 || '') + ':' + emojiCodes[App.escapeRegExp(g2)] + ':';
            });
        };
    });

    App.filter('emoji', function (emojiMaps, $filter) {

        var hex2char = function (hex) {
            var n = parseInt(hex, 16);

            if (n <= 0xFFFF) {
                return String.fromCharCode(n);
            } else if (n <= 0x10FFFF) {
                n -= 0x10000;
                return String.fromCharCode(0xD800 | (n >> 10)) + String.fromCharCode(0xDC00 | (n & 0x3FF));
            }
        };

        var convertNumbers2Char = function (str) {
            return str.replace(/(\b[A-Fa-f0-9]{1,6}\b)/g, function (matchstr, parens) {
                    return hex2char(parens);
                }
            );
        };

        var emojiRegex = new RegExp(":(" + Object.keys(emojiMaps).join("|") + "):", "g");

        return function (input, replaceCode, isUnicode) {
            if (input === undefined) return;
            if (typeof input === "object") return input;

            if (replaceCode) {
                input = $filter('emojiCodeToEmoji')(input);
            }

            if (isUnicode) {
                return input.replace(emojiRegex, function (match, text) {
                    return convertNumbers2Char(emojiMaps[App.escapeRegExp(text)].unicode);
                });
            } else {
                return input.replace(emojiRegex, function (match, text) {
                    return "<i class='emoji emoji_" + emojiMaps[App.escapeRegExp(text)].unescaped + "'></i>";
                });
            }
        };
    });
})(angular.module('cts.emoji'));