import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import { WebserverService } from 'src/app/services/webserver.service';
import { LOGIN_PROVIDER } from 'src/app/utilities/system.constants';

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

  constructor(private _webServer: WebserverService) {}

  ngOnInit() {}

  public btnLogin_click(provider: string) {
    this._webServer.login(provider, (result: auth.UserCredential) => {});
  }

  public btnLogout_click() {
    this._webServer.logout(() => {});
  }
}
