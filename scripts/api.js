/* global $ */
'use strict';

const api = (function(){
  const base_URL='https://thinkful-list-api.herokuapp.com/cameron-janet';

  const getItems = function (){
    return $.getJSON(`${base_URL}/items`);
  };

  const createItem = function(name){
    const newItem = JSON.stringify({name});
    return $.ajax({
      url: `${base_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem
    });
  };


  const updateItem = function (id, updateData){
    return $.ajax({
      url: `${base_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData)
    });
  };

  const deleteItem = function(id){
    return $.ajax({
      url: `${base_URL}/items/${id}`,
      method: 'DELETE'
    });
  };




  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };

})();