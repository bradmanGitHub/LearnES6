"use strict";

var drink = ['Coke', 'Pepsi777'];
var html = '<ul><li>' + drink.join('</li><li>') + '</li></ul>';

var showDrink = function showDrink() {
  return html;
};