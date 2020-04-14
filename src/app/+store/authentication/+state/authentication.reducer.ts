import {
  AuthenticationAction,
  AuthenticationActionTypes,
} from './authentication.actions';

export const AUTHENTICATION_FEATURE_KEY = 'authentication';

export interface AuthenticationState {
  isLoggedIn: boolean;
}

export const initialState: AuthenticationState = {
  isLoggedIn: false,
};

export function authenticationReducer(
  state: AuthenticationState = initialState,
  action: AuthenticationAction,
): AuthenticationState {
  switch (action.type) {
    case AuthenticationActionTypes.IsLoggedInUpdated: {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    }
    case AuthenticationActionTypes.ResetState: {
      return initialState;
    }

    default:
      return state;
  }
}
