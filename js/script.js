// js/script.js

(function () {
  'use strict';

  var categories = [
    {
      short_name: 'L',
      name: 'Lunch'
    },
    {
      short_name: 'D',
      name: 'Dinner'
    },
    {
      short_name: 'S',
      name: 'Sushi'
    },
    // Add more categories as needed
  ];

  function getRandomCategoryShortName() {
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex].short_name;
  }

  function loadMenuItems(shortName) {
    console.log('Loading menu items for category:', shortName);
    // Example: Use AJAX request to load menu items from server
  }

  document.getElementById('specials-tile').addEventListener('click', function () {
    var randomCategoryShortName = getRandomCategoryShortName();
    loadMenuItems(randomCategoryShortName);
  });

})();
