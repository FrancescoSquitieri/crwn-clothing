import {UserData} from "../../utils/firebase/firebase.utils";
import {AnyAction} from "redux";
import {signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed} from "./user.action";

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null,
}

export const userReducer = (
    state = INITIAL_STATE,
    action: AnyAction
): UserState => {
    if(signInFailed.match(action) || signOutFailed.match(action) || signUpFailed.match(action)) {
        return {
            ...state,
            error: action.payload,
        }
    }
    if(signInSuccess.match(action)) {
        return {
            ...state,
            currentUser: action.payload
        };
    }
    if(signOutSuccess.match(action)) {
        return {
            ...state,
            currentUser: null,
        }
    }
    return state;
    /*
    const { type, payload } = action;

    switch (type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload
            };
        case SIGN_IN_FAILED:
        case SIGN_OUT_FAILED:
        case SIGN_UP_FAILED:
            return {
                ...state,
                error: payload,
            }
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
            }
        default:
            return state;
    }
     */
}