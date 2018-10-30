import { Component } from '@angular/core';
import { WebserverService } from './services/webserver.service';
import { CACHED } from './utilities/system.constants';
import { SystemHelper } from './utilities/system.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(protected webService: WebserverService) {}

  public saveStoreCached(storeId: string, order: Object) {
    localStorage.setItem(storeId, JSON.stringify(order));
  }

  public saveStoreInfo(storeId: string) {
    SystemHelper.storeId = storeId;
  }

  public isStoreCached(storeId: string) {
    const storeCached = localStorage.getItem(storeId);
    if (storeCached === undefined
      || storeCached === null
      || storeCached === '') {
        return false;
    }
    return true;
  }

  public saveLoginCached(userId: string) {
    localStorage.setItem(CACHED.USER_ID, userId);
  }

  public saveLoginInfo(userId: string) {
    SystemHelper.userId = userId;
  }

  public clearLoginCached() {
    localStorage.removeItem(CACHED.USER_ID);
  }

  public isLoginCached() {
    const userCached = localStorage.getItem(CACHED.USER_ID);
    if (userCached === undefined
      || userCached === null
      || userCached === '') {
        return false;
    }
    return true;
  }
}
