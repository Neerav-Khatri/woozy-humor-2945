import axios from "axios";
import * as types from "./actiontypes.login";

export const handleLoading = () => {
    return {type: types.isLOADING};
}
  
export const handleError = () => {
    return {type: types.isERROR};
}

export const registered = () => {
    return {type: types.REGISTER_USER};
}

export const registerUser = (data) => (dispatch) => {
    dispatch(handleLoading);
    axios
      .post(`https://charming-bee-pea-coat.cyclic.app/user`, data)
      .then((res) => {
        dispatch(registered);
      })
      .catch((error) => {
        console.log(error);
        dispatch(handleError);
      });
}

export const loginUser = (data) => (dispatch) => {
    dispatch(handleLoading);
    axios
      .get(
        `https://charming-bee-pea-coat.cyclic.app/user?q=${data.email}&${data.password}`
      )
      .then((res) => {
        dispatch({ type: types.USER_LOGIN, payload: res.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch(handleError);
      });
}

export const adminLogin = (data) => (dispatch) => {
    dispatch(handleLoading);
    axios
      .get(
        `https://charming-bee-pea-coat.cyclic.app/admin?q=${data.email}&${data.password}`
      )
      .then((res) => {
        dispatch({ type: types.ADMIN_LOGIN, payload: res.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch(handleError);
      });
}