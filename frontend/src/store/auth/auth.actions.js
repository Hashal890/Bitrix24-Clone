import axios from "axios";
import {
  Auth_LogIn_Error,
  Auth_LogIn_Loading,
  Auth_LogIn_Success,
  Auth_Logout,
  Auth_SignUp_Error,
  Auth_SignUp_Loading,
  Auth_SignUp_Success,
} from "./auth.types";

export const loginAPI = (creds) => async (dispatch) => {
  dispatch({ type: Auth_LogIn_Loading });
  try {
    let res = await axios.post(
      "https://bitrix24-backend.cyclic.app/login",
      creds
    );
    dispatch({ type: Auth_LogIn_Success, payload: res.data });
    return res.data;
  } catch (err) {
    dispatch({ type: Auth_LogIn_Error });
  }
};

export const logoutAPI = () => (dispatch) => {
  dispatch({ type: Auth_Logout });
};

export const signupAPI = (creds) => async (dispatch) => {
  dispatch({ type: Auth_SignUp_Loading });
  try {
    let res = await axios.post(
      "https://bitrix24-backend.cyclic.app/signup",
      creds
    );
    dispatch({ type: Auth_SignUp_Success, payload: res.data });
    return res.data;
  } catch (err) {
    dispatch({ type: Auth_SignUp_Error, payload: err.response });
  }
};
