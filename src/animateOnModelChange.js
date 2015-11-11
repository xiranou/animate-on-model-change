angular.module('animateOnModelChange',[])
  .directive('animateOnModelChange', ['$timeout',function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.$watch(attrs.animateOnModelChange, function(nv,ov){
          element
            .removeClass('change-animate')
            .addClass('change-animate');
          element.on('webkitAnimationEnd mozAnimationEnd animationend', function(e) {
            e.preventDefault();
            element.removeClass('change-animate');
          });
        });
      }
    };
  }]);