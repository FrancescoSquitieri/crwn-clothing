import { takeLatest, put, all, call } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import {
    signInFailed,
    signInSuccess,
    signOutFailed,
    signOutSuccess,
    signUpFailed,
    signUpSuccess
} from './user.action'
import {
    getCurrentUser,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword,
    SignOutUser
} from "../../utils/firebase/firebase.utils";

const {
    CHECK_USER_SESSION,
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_OUT_START
} = USER_ACTION_TYPES;

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
    yield call(getSnapshotFromUserAuth, user, additionalDetails)
}

export function* onSignUpSuccess() {
    yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
        yield put(signUpSuccess(user, displayName));
    } catch (error) {
        yield put(signUpFailed(error));
    }
}

export function* onSignUpStart() {
    yield takeLatest(SIGN_UP_START, signUp)
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onEmailAndPasswordSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
    try {
        yield call(SignOutUser);
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailed(error));
    }
}

export function* onSignOutStart() {
    yield takeLatest(SIGN_OUT_START, signOut);
}

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailAndPasswordSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart)
    ]);
}