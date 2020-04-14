import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationFacade } from './+store/authentication/authentication.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isLoggedIn$: Observable<boolean> = this._authenticationFacade
    .isLoggedIn;
  constructor(private _authenticationFacade: AuthenticationFacade) {}

  public nowLoggedIn() {
    this._authenticationFacade.updateIsLoggedIn(true);
  }

  public nowLoggedOut() {
    this._authenticationFacade.updateIsLoggedIn(false);
  }
}
