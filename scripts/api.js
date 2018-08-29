const api = (function(){
const base_URL="https://thinkful-list-api.herokuapp.com/cameron-janet";

const getItems = function (callback){
    callback('api module works!');
};

return {
    getItems,
}

})();