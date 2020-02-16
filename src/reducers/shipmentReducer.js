import { SHIPMENT_ACTION_TYPES } from "../constants/constants";

const initialState = {
    shipments:[],
    shipment: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SHIPMENT_ACTION_TYPES.FETCH_SHIPMENTS_SUCCESS:
            return {
                ...state,
                shipments: action.payload
            };
        case SHIPMENT_ACTION_TYPES.FETCH_SHIPMENTS_FAILURE:
            return {
                ...state,
                shipments: action.payload
            };
        default:
            return state;
    }
}