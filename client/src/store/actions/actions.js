import {ActionTypes} from '../constants/constants';

export function getAllTintuc(values){
    return{
        type:ActionTypes.GET_ALL_TINTUC,
        values
    };
};