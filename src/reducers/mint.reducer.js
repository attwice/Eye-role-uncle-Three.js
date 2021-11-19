import { CHANGE_TIME } from '../constants/actionTypes';

var initialState = {
    publicsale: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState, action) => {
    switch(action.type) {
        case CHANGE_TIME:
            return {
                ...state,
                publicsale: action.payload,     
            }
        default: 
            return state;
    }
}