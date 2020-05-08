import * as mutations from "../mutations";
export function user(user = {}, action) {
  switch (action.type) {
    case mutations.SET_USER:
      return action.user;
  }
  return user;
}
