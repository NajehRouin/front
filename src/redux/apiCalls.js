import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess, logoutSuccess } from "./userRedux"


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const result = await publicRequest.post('api/auth/login', user);
        console.log(result.data)
       dispatch(loginSuccess(result.data));
        //after success login, redirect to home page
       window.location.href = '/home';
    } catch (error) {
        dispatch(loginFailure());

    }
}

export const logout = async (dispatch) => {
    dispatch(logoutSuccess());
    window.location.href = '/login';
}


