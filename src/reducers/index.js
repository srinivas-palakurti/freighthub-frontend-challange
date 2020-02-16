import { combineReducers } from "redux";
import shipmentReducer from './shipmentReducer';

// const initialState = {
//     shipments: []
// };

// function rootReducer(state = initialState, action) {
//     return state;
// }

export default combineReducers({
    shipments: shipmentReducer
});