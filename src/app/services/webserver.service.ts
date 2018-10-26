import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { auth } from 'firebase';
import { LOGIN_PROVIDER } from '../utilities/system.constants';
import { FISHES } from '../utilities/system.sample-fish';

@Injectable({
  providedIn: 'root'
})
export class WebserverService {
  constructor(private _db: AngularFireDatabase, private _auth: AngularFireAuth) {}

  public loadSampleFishes(storeId: string) {
    this._db.list(`/${storeId}`).set('fishes', FISHES);
  }

  public getFishes(storeId: string) {
    return this._db.list(`/${storeId}/fishes`).valueChanges();
  }

  public login(provider: string, serviceCallback: (result: any) => void) {
    if (LOGIN_PROVIDER.FACEBOOK === provider) {
      this._auth.auth.signInWithPopup(new auth.FacebookAuthProvider())
        .then((result) => serviceCallback(result));
    } else if (LOGIN_PROVIDER.GITHUB === provider) {
      this._auth.auth.signInWithPopup(new auth.GithubAuthProvider())
        .then((result) => serviceCallback(result));
    } else if (LOGIN_PROVIDER.TWITTER === provider) {
      this._auth.auth.signInWithPopup(new auth.TwitterAuthProvider())
        .then((result) => serviceCallback(result));
    }
  }

  public logout(serviceCallback: () => void) {
    this._auth.auth.signOut()
      .then(() => serviceCallback());
  }
}
