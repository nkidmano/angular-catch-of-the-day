import { Component, OnInit } from '@angular/core';
import { WebserverService } from 'src/app/services/webserver.service';
import { CACHED, LOGIN_PROVIDER } from 'src/app/utilities/system.constants';
import { SystemHelper } from 'src/app/utilities/system.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public readonly PROVIDER = {
    GITHUB: LOGIN_PROVIDER.GITHUB,
    FACEBOOK: LOGIN_PROVIDER.FACEBOOK,
    TWITTER: LOGIN_PROVIDER.TWITTER
  };

  constructor(private _webServer: WebserverService) { }

  ngOnInit() {}

  public btnLogin_click(provider: string) {
    this._webServer.login(provider, (result) => {
      this._saveLoginCached(result);
    });
  }

  public btnLogout_click() {
    this._webServer.logout(() => {
      this._clearLoginCached();
      SystemHelper.userId = '';
    });
  }

  private _saveLoginCached(userId: string) {
    if (!this._isLoginCached()) {
      SystemHelper.userId = userId;
      localStorage.setItem(CACHED.USER_ID, userId);
    }
  }

  private _isLoginCached() {
    const userCached = localStorage.getItem(CACHED.USER_ID);
    if (userCached === undefined
      || userCached === null
      || userCached === '') {
        return false;
    }
    return true;
  }

  private _clearLoginCached() {
    localStorage.setItem(CACHED.USER_ID, '');
  }
}
