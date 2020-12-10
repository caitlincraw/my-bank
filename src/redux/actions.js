import {TRANSFER_FROM_CHECKING, TRANSFER_FROM_SAVINGS, BILL_PAY_FROM_CHECKING} from './actionTypes';

const transferFromChecking = amount => {
    return {
        type: TRANSFER_FROM_CHECKING,
        payload: {
            amount,
            transaction: {
                amount,
                date: Date.now(), 
                destination: "Savings",
                source: "Checking"
            }
        }
    }
}

const billPayFromChecking = (billAmount, vendor) => {
    return {
        type: BILL_PAY_FROM_CHECKING,
        payload: {
            billAmount,
            transaction: {
                billAmount,
                date: Date.now(),
                type: "online bill pay",
                vendor,
                source: "Checking"
            }
        }
    }
}

export { transferFromChecking, billPayFromChecking };