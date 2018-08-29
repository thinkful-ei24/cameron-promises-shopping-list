/* global shoppingList, store, $ */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});


api.getItems((items) => {
  const item = items[0];
  
  api.updateItem(item.id, { name: 'foobar' }, () => {
    console.log('updated!');
  });
});


