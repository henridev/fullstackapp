import * as mutations from "../mutations";
export function comments(comments = [], action) {
  switch (action.type) {
    case mutations.SET_STATE:
      return action.state.comments;
  }
  return comments;
}
