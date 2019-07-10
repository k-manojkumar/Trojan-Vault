import { USER_LOGIN } from "./ActionsConstants";

export const userLogin = (userName, password) => dispatch => {
  let loginState = false;

  console.log(userName);

  if (userName === "manojkumar" && password === "12345") {
    loginState = true;
  }

  return dispatch({
    type: USER_LOGIN,
    payload: loginState
  });
};
