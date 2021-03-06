import { myFirebase } from "../firebase/firebase";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

const loginError = () => {
    return {
        type: LOGIN_FAILURE
    };
};

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

const logoutError = () => {
    return {
        type: LOGOUT_FAILURE
    };
};
const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST
    };
};
const verifySuccess = () => {
    return {
        type: VERIFY_SUCCESS
    };
};
export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    myFirebase
        .signInWithEmailAndPassword(myFirebase.getAuth(), email, password)
        .then(user => {
            dispatch(receiveLogin(user));
        })
        .catch(error => {
            //Do something with the error if you want!
            console.log(error);
            dispatch(loginError());
        });
};
export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    myFirebase
        .signOut(myFirebase.getAuth())
        .then(() => {
            dispatch(receiveLogout());
        })
        .catch(error => {
            //Do something with the error if you want!
            console.log(error);
            dispatch(logoutError());
        });
};
export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    myFirebase.onAuthStateChanged(myFirebase.getAuth(), user => {
        if (user !== null) {
            dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
    });
};