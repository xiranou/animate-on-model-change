# animate-on-model-change

Adds class `change-animate` to element when the given model has value changed

Include javascript file

    <script src="animateOnModelChange.js"></script>

Inject the module into your angular app

    var app = angular.module('myApp', ['animateOnModelChange'])

Apply to the element you wish to aniamte and pass in model to watch for change

    <span animate-on-model-change watch-model="yourModel"></span>

Animate away with CSS!

    span {
      &.change-animate {
        animation: yourAnimation 0.5s ease;
      }
    }