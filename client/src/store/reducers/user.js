import * as mutations from "../mutations";
export function user(user = {}, action) {
  switch (action.type) {
    case mutations.SET_STATE:
      return action.state.user;
  }
  return user;
}
