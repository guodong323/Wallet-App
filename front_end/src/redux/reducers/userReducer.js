import { GET_USERS, GET_USER } from "../actions/actionTypes";

export * as types from "../actions/actionTypes";

const initialState={
    users: [],
    user: {}
}

export default function userReducer(state=initialState,action) {
    switch (action.types) {
        case GET_USERS:
            return {...state,users:action.payload};
        case GET_USER:
            return {...state,user:action.payload};
        default:
            return state;
    }
}