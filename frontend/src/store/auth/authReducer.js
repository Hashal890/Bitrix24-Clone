import {
  Auth_LogIn_Error,
  Auth_LogIn_Loading,
  Auth_LogIn_Success,
  Auth_Logout,
  Auth_SignUp_Error,
  Auth_SignUp_Loading,
  Auth_SignUp_Success,
} from "./auth.types";

const token = localStorage.getItem("token") || "";

const initAuth = {
  loading: false,
  error: false,
  isAuthanticated: false,
  token: token,
  message: "",
};

const authReducer = (state = initAuth, { type, payload }) => {
  switch (type) {
    case Auth_SignUp_Loading: {
      return {
        ...state,
        loading: true,
      };
    }
    case Auth_SignUp_Error: {
      return {
        ...state,
        loading: false,
        error: true,
        message : payload.data
      };
    }
    case Auth_SignUp_Success: {
      return {
        ...state,
        loading: false,
        error: false,
        token: payload.token,
      };
    }
    case Auth_LogIn_Loading: {
      return {
        ...state,
        loading: true,
      };
    }
    case Auth_LogIn_Error: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    case Auth_LogIn_Success: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        error: false,
        isAuthanticated: true,
        token: payload.token,
      };
    }
    case Auth_Logout: {
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        error: false,
        isAuthanticated: false,
        token: "",
      };
    }
    default:
      return state;
  }
};

export default authReducer;
