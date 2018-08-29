/* global Item */
'use strict';
// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
  
  this.items.push(item);
    
  };

  const findAndUpdate = function (id, newData){
    Object.assign(this.findById(id), newData);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    addItem,
    findById,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    findAndUpdate
  };
  
}());
