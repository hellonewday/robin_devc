import { VALIDATE_USER_SUCCESS, REGISTER_USER_SUCCESS } from "../actions/types";

let initState = {
  loginResponse: {},
  registerResponse: {},
};

export default function (state = initState, action) {
  switch (action.type) {
    case VALIDATE_USER_SUCCESS:
      return { ...state, loginResponse: action.response };
    case REGISTER_USER_SUCCESS:
      return { ...state, registerResponse: action.response };
    default:
      return state;
  }
}
