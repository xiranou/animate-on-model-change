angular.module('animateOnModelChange',[])
  .directive('animateOnModelChange', [function() {
    return {
      restrict: 'A',
      scope: {
        watchModel: "="
      },
      link: function (scope, element, attrs) {
        scope.$watch('watchModel', function(nv,ov){
          element
            .removeClass('change-animate')
            .addClass('change-animate');
          element.on('webkitAnimationEnd mozAnimationEnd animationend', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            element.removeClass('change-animate');
          });
        });
      }
    };
  }]);