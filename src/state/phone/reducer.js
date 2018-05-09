import initialValue from './initialValue';
import {GET_MODEL} from './action-creator'

const phoneReducer = (state=initialValue, action) => {
    switch(action.type){
        case GET_MODEL:{
            state = {...state, model: action.payload};
            break;
        }
        case "CHANGE_PROVIDER":{
            state = {...state, provider: action.payload};
            break;
        }
        case "CHANGE_CONDITION":{
            state = {...state, condition: action.payload};
            break;
        }
        default:{
            return state;
        }
    }
    return state;
}

export default phoneReducer;