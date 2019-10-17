import {ActionTypes} from '../constants/constants';
const AllInitialState = {
    Tintuc:null
}
const myReducer = (state = AllInitialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_TINTUC:
            return action.values.data;
        default:
            return state
    }
}
export default myReducer;