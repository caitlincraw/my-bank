import { TRANSFER_FROM_SAVINGS } from "../actionTypes";

const initialState = {
    balance: 356
};

export default function(state = initialState, action) {
    switch(action.type) {
        case TRANSFER_FROM_SAVINGS: {

        }
        default:
            return state;
    }
}