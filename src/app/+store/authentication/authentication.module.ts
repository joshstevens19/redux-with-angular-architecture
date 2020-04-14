import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  authenticationReducer,
  AUTHENTICATION_FEATURE_KEY,
  initialState as authenticationInitialState,
} from './+state/authentication.reducer';
import { AuthenticationFacade } from './authentication.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTHENTICATION_FEATURE_KEY, authenticationReducer, {
      initialState: authenticationInitialState,
    }),
  ],
  providers: [AuthenticationFacade],
})
export class AuthenticationStoreModule {}
