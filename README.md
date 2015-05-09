# AngularJS Emoji Filter HD
=========

An AngularJS filter for replacing [emoji codes](http://www.emoji-cheat-sheet.com) with actual **high-definition** emoticons (**Retina** friendly). (heavily inspired by [Angular-Emoji-Filter](https://github.com/globaldev/angular-emoji-filter))

Installation
--
This module is available via NPM or bower, install it with this command:

Via bower

```bash
bower install https://github.com/chanthus/angular-emoji-filter-hd.git
```

Demo
--
See this [plunker](http://embed.plnkr.co/Woxf3rQuLiYWhh7ccvak/preview)

Usage
--
- Add cts.emoji as a dependency
- Add ngSanitize as a dependency (belongs to AngularJS)
- Apply the filter within ng-bind-html: ```<div ng-bind-html="message | emoji"></div>```

Example
--

```html
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="emoji.min.css">
        <script src="angular.min.js"></script>
        <script src="emoji.min.js"></script>
    </head>
    <body ng-app="app" ng-controller="AppCtrl">
        <div ng-bind-html="message | emoji"></div>
    </body>
</html>
```
 
```js
angular.module("app", ["cts.emoji","ngSanitize"]).controller("AppCtrl", function ($scope) {
    $scope.message = "Animals: :dog: :cat: :snake: People: :smile: :confused: :angry: Places: :house: :school: :hotel: :poop:";
});
```


License
--
The AngularJS Emoji filter HD is released under the MIT license as detailed in the LICENSE file that should be distributed with this library; the source code is [freely available](http://github.com/globaldev/angular-emoji-filter).

The filter was adapted by me from the work of [dbaq](https://github.com/dbaq/angular-emoji-filter-hd). The resources come from [emoji codes website](http://www.emoji-cheat-sheet.com)