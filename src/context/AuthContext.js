import { createContext, useEffect, useReducer } from "react";

const initial_state = {
  user: localStorage.getItem('user')!==undefined ? JSON.parse(localStorage.getItem('user')): null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, user: null, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, loading: false };
    case "LOGIN_FAILURE":
      return { ...state, user: null, loading: false, error: action.payload };
    case "REGISTER_SUCCESS":
      return { ...state, loading: false, error: null };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.user]);

  return (
    <AuthContext.Provider value={{
      user: state.user,
      loading: state.loading,
      error: state.error,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  );
};
