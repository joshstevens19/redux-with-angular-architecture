import { Action } from '@ngrx/store';

export enum AuthenticationActionTypes {
  IsLoggedInUpdated = '[Authentication] Updated logged in state',
  ResetState = '[Authentication] Reset state back to initial state',
}

export class IsLoggedInUpdated implements Action {
  public readonly type = AuthenticationActionTypes.IsLoggedInUpdated;
  constructor(public payload: boolean) {}
}

export class ResetState implements Action {
  public readonly type = AuthenticationActionTypes.ResetState;
  constructor() {}
}

export type AuthenticationAction = IsLoggedInUpdated | ResetState;
