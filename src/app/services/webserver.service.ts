import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { auth } from 'firebase';
import { LOGIN_PROVIDER } from '../utilities/system.constants';
import { SystemHelper } from '../utilities/system.helper';
import { FISHES } from '../utilities/system.sample-fish';

@Injectable({
  providedIn: 'root'
})
export class WebserverService {
  constructor(private _db: AngularFireDatabase, private _auth: AngularFireAuth) {}

  public loadSampleFishes() {
    this._db.list(`/${SystemHelper.storeId}`).set('fishes', FISHES);
  }

  public getFishes() {
    return this._db.list(`/${SystemHelper.storeId}/fishes`).valueChanges();
  }

  public login(provider: string, serviceCallback: (result: any) => void) {
    if (LOGIN_PROVIDER.FACEBOOK === provider) {
      this._auth.auth.signInWithPopup(new auth.FacebookAuthProvider())
        .then((result: auth.UserCredential) => {
          serviceCallback(result);
        });
    } else if (LOGIN_PROVIDER.GITHUB === provider) {
      this._auth.auth.signInWithPopup(new auth.GithubAuthProvider())
        .then((result: auth.UserCredential) => {
          serviceCallback(result);
        });
    } else if (LOGIN_PROVIDER.TWITTER === provider) {
      this._auth.auth.signInWithPopup(new auth.TwitterAuthProvider())
        .then((result: auth.UserCredential) => {
          serviceCallback(result);
        });
    }
  }

  public logout(serviceCallback: () => void) {
    this._auth.auth.signOut()
      .then(() => serviceCallback());
  }

  public getStoreData(serviceCallback: (result: any) => void) {
    this._db.object(`/${SystemHelper.storeId}`).valueChanges().subscribe(result => {
      serviceCallback(result);
    });
  }

  public setOwner(userId: string) {
    this._db.list(`/${SystemHelper.storeId}`).set('owner', userId);
  }
}
