import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemHelper } from 'src/app/utilities/system.helper';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {
  private _storeId: string;
  private _order = {};

  constructor(private _route: ActivatedRoute) {
    this._storeId = this._getStoreId();
  }

  ngOnInit() {
    this._init();
  }

  private _init() {
    if (this._storeId) {
      SystemHelper.storeId = this._storeId;
      this._saveStoreCached();
    }
  }

  private _saveStoreCached() {
    if (!this._isStoreCached()) {
      this._order = {};
      localStorage.setItem(this._storeId, JSON.stringify(this._order));
    }
  }

  private _isStoreCached() {
    const storeCached = localStorage.getItem(this._storeId);
    if (storeCached === undefined
      || storeCached === null
      || storeCached === '') {
        return false;
    }
    return true;
  }

  private _getStoreId() {
    const storeId = this._route.snapshot.params['storeId'];
    return storeId;
  }
}
