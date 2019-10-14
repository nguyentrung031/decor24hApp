
import axios from 'axios';
var redux = require('redux');
const AddData = (Email) => (
    axios.post("/api/addEmail", (Email))
    .then((Response) => Response.data)
    .catch((error) => console.log(error))
)

const allInitialState = { 
}
const allReducer = (state = allInitialState, action) => {
    switch (action.type) {
        case"ADD_DATA_MAIL":
            AddData.push(action.getItem);
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})
export default store;