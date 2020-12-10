import { BILL_PAY_FROM_CHECKING } from "../actionTypes";

const initialState = {
    billAmount: 0,
    transactions: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case BILL_PAY_FROM_CHECKING: {
            return {
                ...state, 
                billAmount: state.billAmount + action.payload.billAmount,
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