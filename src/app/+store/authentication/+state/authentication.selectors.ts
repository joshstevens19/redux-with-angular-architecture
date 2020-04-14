import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AuthenticationState,
  AUTHENTICATION_FEATURE_KEY,
} from './authentication.reducer';

const getAuthenticationState = createFeatureSelector<AuthenticationState>(
  AUTHENTICATION_FEATURE_KEY,
);

const getIsLoggedIn = createSelector(
  getAuthenticationState,
  (state: AuthenticationState) => {
    return state.isLoggedIn;
  },
);

export const authenticationQuery = {
  getIsLoggedIn,
};
