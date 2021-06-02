export const USER_LOGIN = 'USER_LOGIN';
export const REGISTER_CUSTOMER = 'REGISTER_CUSTOMER';

export const userLogin = (loged) => ({
  type: USER_LOGIN,
  payload: {
    loged,
  }
});

export const registerCustomer = (payload) => ({
  type: REGISTER_CUSTOMER,
  payload,
});
