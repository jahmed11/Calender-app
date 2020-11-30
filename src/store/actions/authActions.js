import * as actionType from "./actionsTypes";
import axios from "axios";

export const getUserCredentials = (id, token) => {
  return {
    type: actionType.LOGGED_IN,
    id,
    token,
  };
};

export const login = (userData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/user/login", userData)
      .then((res) => {
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            id: res.data.id,
            token: res.data.token,
          })
        );
        dispatch(getUserCredentials(res.data.id, res.data.token));
      })
      .catch((err) => console.log(err));
  };
};

export const signup = (userData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/user/signup", userData)
      .then((res) => dispatch(getUserCredentials(res.data.id, res.data.token)))
      .catch((err) => console.log(err));
  };
};
