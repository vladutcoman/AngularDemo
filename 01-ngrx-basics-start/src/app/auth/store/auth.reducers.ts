import * as AuthActions from './auth.actions'
import { SIGNIN, LOGOUT } from './auth.actions';

export interface State {
  token: string,
  authentificated: boolean
}

const initialState: State = {
  token: null,
  authentificated: false  
};

export function authReducer(state = initialState, action) {
  switch(action.type) {
    case (AuthActions.SIGNUP):
    case (AuthActions.SIGNIN):
      return {
        ...state,
        authentificated: true
      };
    case (AuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authentificated: false
      };
    default:
      return state;
  }
}