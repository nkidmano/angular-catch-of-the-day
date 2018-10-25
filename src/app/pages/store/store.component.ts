import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {
  private _storeId: string;
  private _order = {};

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._saveStoreCached();
  }

  private _saveStoreCached() {
    if (!this._isStoreCached()) {
      const storeId = this._route.snapshot.params['storeId'];
      localStorage.setItem(storeId, JSON.stringify(this._order));
    }
  }

  private _isStoreCached() {
    const storeId = this._route.snapshot.params['storeId'];
    const storeCached = localStorage.getItem(storeId);
    if (storeCached === undefined
      || storeCached === null
      || storeCached === '') {
        return false;
    }
    return true;
  }
}
