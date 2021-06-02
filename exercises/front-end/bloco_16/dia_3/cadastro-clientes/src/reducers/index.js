import { USER_LOGIN, REGISTER_CUSTOMER } from '../actions';

const INITIAL_STATE = {
  logedIn: false,
  customers: [],
}

const registerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case USER_LOGIN:
      return {...state, logedIn: action.payload.loged};
    case REGISTER_CUSTOMER:
      return state;
    default:
      return state;
  }
}

export default registerReducer;
