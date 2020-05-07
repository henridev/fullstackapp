import * as mutations from "../mutations";

export function session(userSession = {}, action) {
  let { type, currentSession, authenticated } = action;
  switch (type) {
    case mutations.SET_STATE:
      return { ...userSession, id: action.state.session.id };
    case mutations.REQUEST_AUTHENTICATE_USER:
      return { ...userSession, authenticated: mutations.AUTHENTICATING };
    case mutations.PROCESS_AUTHENTICATE_USER:
      return { ...userSession, authenticated };

    default:
      return userSession;
  }
}
