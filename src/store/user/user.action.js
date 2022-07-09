import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

const {
    SET_CURRENT_USER,
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START,
    CHECK_USER_SESSION,
    SIGN_IN_FAILED,
    SIGN_IN_SUCCESS,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    SIGN_OUT_START,
    SIGN_OUT_FAILED,
    SIGN_OUT_SUCCESS
} = USER_ACTION_TYPES;
export const setCurrentUser = (user) => {
    return createAction(
        SET_CURRENT_USER,
        user
    );
}

export const checkUserSession = () => createAction(CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) => createAction(EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) => createAction(SIGN_IN_SUCCESS, user);

export const signInFailed = (error) => createAction(SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) => createAction(SIGN_UP_START, { email, password, displayName });

export const signUpSuccess = (user, additionalDetails) => createAction(SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) => createAction(SIGN_UP_FAILED, error);

export const signOutStart = () => createAction(SIGN_OUT_START);

export const signOutSuccess = () => createAction(SIGN_OUT_SUCCESS);

export const signOutFailed = (error) => createAction(SIGN_OUT_FAILED, error)