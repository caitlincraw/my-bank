import { TRANSFER_FROM_CHECKING } from "../actionTypes";

const initialState = {
    balance: 999,
    transactions: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case TRANSFER_FROM_CHECKING: {
            return {
                ...state, 
                balance: state.balance + action.payload.amount,
                transactions: [
                    ...state.transactions,
                    {
                        ...action.payload.transaction
                    }
                ]
            }
        }
        default:
            return state;
    }
}