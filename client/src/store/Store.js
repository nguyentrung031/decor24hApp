import myReducer from './reducer/reducer';
var redux = require('redux');
var store = redux.createStore(myReducer);
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})
export default store;