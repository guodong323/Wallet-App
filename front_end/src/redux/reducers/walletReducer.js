import { types } from "./transactionReducer";

export * as types from "../actions/actionTypes";

const initialState={
    wallets:[],
    wallet: {}
}

export default function walletReducer(state=initialState,action) {
    switch (action.type) {
        case types.GET_WALLETS:
            return {...state,wallets:action.payload};
        case types.GET_WALLET:
            return {...state,wallet:action.payload};
        case types.DELETE_WALLET:
            return {...state,wallets:state.wallets.filter(wallet=>wallet.id!==action.payload)};
        default:
            return state;
    }
}