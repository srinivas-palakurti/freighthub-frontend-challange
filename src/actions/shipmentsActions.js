// import { SHIPMENT_ACTION_TYPES } from "../constants/constants";
import { SHIPMENT_ACTION_TYPES } from "../constants/constants";

export const fetchShipments = () => dispatch => {
    console.log('action');
    fetch('http://localhost:3000/shipments')
            .then(res => res.json())
            .then(shipments => 
                dispatch({
                    type: SHIPMENT_ACTION_TYPES.FETCH_SHIPMENTS_SUCCESS,
                    payload: shipments
                })
            )
            .catch(() => {
                dispatch({
                    type: SHIPMENT_ACTION_TYPES.FETCH_SHIPMENTS_FAILURE,
                    payload: []
                })
            })
}