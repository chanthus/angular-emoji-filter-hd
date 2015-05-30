(function (App) {
    App.controller('HomeController', function ($scope, $sce, $http, emojiMaps, $filter) {

        $scope.emojiCss = '';
        $scope.emojisMap = '';
        $scope.emojiCodes = '';
        $scope.emojiCategories = '';

        $scope.emojiHtml = '';
        $scope.testEmojiString = 'This is a :smile: and here\'s the code version -> :)';

        var escapeRegExp = function (str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        };

        var generateEmojisMap = function () {

            $http.get('../lib/css/base.css').success(function (cssData) {
                $http.get('../lib/data/emoji_pretty.json').success(function (emojisMap) {

                    var cssMap = '';
                    var emojiMap = {};
                    var codesMap = {};
                    var categoryMap = {};
                    var emojiReplaceStatement = '';

                    var moduleName = 'cts.emoji';

                    var sizeDivision = 1;
                    var size = 22 / sizeDivision;
                    var totalSize = 770 / sizeDivision;

                    cssData = cssData.replace(/64px/g, size + 'px');
                    cssData = cssData.replace(/2240px/g, totalSize + 'px');

                    angular.forEach(emojisMap, function (emojiDetails) {

                        var emojiKey = escapeRegExp(emojiDetails.short_name);

                        if (emojiDetails.texts) {
                            angular.forEach(emojiDetails.texts, function (text) {
                                codesMap[escapeRegExp(text)] = emojiDetails.short_name;
                            });
                        }

                        if (emojiDetails.category) {
                            if (!categoryMap[emojiDetails.category]) {
                                categoryMap[emojiDetails.category] = [];
                            }

                            var orderedEmoji = {
                                name: emojiDetails.short_name,
                                order: emojiDetails.sort_order
                            };

                            categoryMap[emojiDetails.category].push(orderedEmoji)
                        }

                        angular.forEach(emojiDetails.short_names, function (short_name) {

                            emojiKey = escapeRegExp(short_name);

                            emojiMap[emojiKey] = {
                                'unescaped': short_name,
                                'unicode': '\\u' + emojiDetails.unified,
                                'name': angular.lowercase(emojiDetails.name)
                            };

                            var x = parseFloat(emojiDetails.sheet_x) * -size;
                            var y = parseFloat(emojiDetails.sheet_y) * -size;

                            cssMap += "" +
                                ".emoji_" + emojiKey + "{\n" +
                                "\tbackground-position: " + x + "px " + y + "px; \n" +
                                "}\n";
                        });
                    });

                    var categoryKeys = Object.keys(categoryMap);

                    for (var i = 0; i < categoryKeys.length; i++) {
                        categoryMap[categoryKeys[i]] = $filter('orderBy')(categoryMap[categoryKeys[i]], 'order');

                        categoryMap[categoryKeys[i]] = categoryMap[categoryKeys[i]].map(function (orderedEmoji) {
                            return orderedEmoji.name;
                        });
                    }

                    $scope.emojiCss = cssData + '\n' + cssMap;

                    $scope.emojisMap = "" +
                        "(function (App) { App.constant('emojiMaps'," +
                        JSON.stringify(emojiMap, null, "\t") +
                        ");})(angular.module('" + moduleName + "'));";

                    $scope.emojiCodes = "" +
                        "(function (App) { App.constant('emojiCodes'," +
                        JSON.stringify(codesMap, null, "\t") +
                        ");})(angular.module('" + moduleName + "'));";

                    $scope.emojiCategories = "" +
                        "(function (App) { App.constant('emojiCategories'," +
                        JSON.stringify(categoryMap, null, "\t") +
                        ");})(angular.module('" + moduleName + "'));";
                });
            });
        };

        var useFilter = function () {

            var allEmojis = [];
            var emojiKeys = Object.keys(emojiMaps);

            for (var i = 0; i < emojiKeys.length; i++) {
                allEmojis.push(emojiMaps[emojiKeys[i]].unescaped);
            }

            var filtered = $filter('emoji')((':' + allEmojis.join(": :") + ':'), false);
            $scope.emojiHtml = $sce.trustAsHtml(filtered);
        };

        useFilter();
        generateEmojisMap();
    });
})(angular.module('cts.emoji.demo', ['cts.emoji', 'ngRoute', 'ngSanitize']));