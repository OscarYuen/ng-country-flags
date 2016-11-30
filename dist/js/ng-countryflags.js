(function() {
    'use strict';

    angular
        .module('ng-countryflags', []);
})();


(function() {
    'use strict';

    angular
        .module('ng-countryflags')
        .directive('countryflag', countryflag);

    function countryflag() {
        var directive = {
            restrict: 'E',
            transclude: true,
            template:
                    '<span ng-if="isSquare" class="flag-icon flag-icon-{{ country }} flag-icon-square"></span>' +
                    '<span ng-if="!isSquare" class="flag-icon flag-icon-{{ country }}"></span>' +
                    '<ng-transclude></ng-transclude>',
            scope: {
                country: '@',
                isSquare: '@'
            },
            link: link
        };

        return directive;

        function link(scope, elm, attrs){
            scope.isSquare = false;

            attrs.$observe('country',function(value){
                if(value){
                    scope.country = angular.lowercase(value);
                }
            });

            attrs.$observe('isSquare', function(value) {
              if(value != null){
                 scope.isSquare = value;
              }
            });
        }
    };


})();
