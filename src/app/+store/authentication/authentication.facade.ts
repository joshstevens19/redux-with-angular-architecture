import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IsLoggedInUpdated, ResetState } from './+state/authentication.actions';
import { AuthenticationState } from './+state/authentication.reducer';
import { authenticationQuery } from './+state/authentication.selectors';

@Injectable()
export class AuthenticationFacade {
  constructor(private _store: Store<AuthenticationState>) {}

  public isLoggedIn: Observable<boolean> = this._store.pipe(
    select(authenticationQuery.getIsLoggedIn),
  );

  public updateIsLoggedIn(isLoggedIn: boolean): void {
    this._store.dispatch(new IsLoggedInUpdated(isLoggedIn));
  }

  public resetState(): void {
    this._store.dispatch(new ResetState());
  }
}
