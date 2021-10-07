import { SET_INPUT, CONNECT_USER, LOGOUT } from "../actions/user";

const initialState = {
  logged: false,
  loggedUser: null,
  username: "",
  email: "",
  password: "",
  passwordConfirm: ""
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        [action.fieldname]: action.value
      };

    case CONNECT_USER:
      return {
        ...state,
        logged: true,
        loggedUser: {
          username: action.data.username,
          email: action.data.email,
          // id: action.data.id,
          // is_admin: action.data.is_admin
        },
        username: "",
        email: "",
        password: ""
      };

    case LOGOUT:
      return {
        ...state,
        logged: false,
        loggedUser: null
      };

    default:
      return state;
  }
};

export default reducer;