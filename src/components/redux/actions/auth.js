const {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  VALIDATE_USER,
  VALIDATE_USER_SUCCESS,
} = require("./types");

export const requestRegister = (data) => {
  return {
    type: REGISTER_USER,
    data,
  };
};

export const responseRegister = (response) => {
  return {
    type: REGISTER_USER_SUCCESS,
    response,
  };
};

export const requestLogin = (data) => {
  return {
    type: VALIDATE_USER,
    data,
  };
};

export const responseLogin = (response) => {
  return {
    type: VALIDATE_USER_SUCCESS,
    response,
  };
};
