var Predator = (function () {
  var carnivores = [],
      herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.

        callbackToInvoke(carnivores);

      });

      loader.open("GET", "carnivore.json");
      loader.send();
    },
    loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        herbivores = JSON.parse(this.responseText);
        callbackToInvoke(herbivores);
      });

      loader.open("GET", "herbivore.json");
      loader.send();
    }
  }
})();