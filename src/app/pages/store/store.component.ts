import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fish } from 'src/app/models/fish.model';
import { Store } from 'src/app/models/store.model';
import { WebserverService } from 'src/app/services/webserver.service';
import { SystemHelper } from 'src/app/utilities/system.helper';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {
  public storeData: StoreData;
  private _storeId: string;
  private _order = {};

  constructor(private _webService: WebserverService, private _route: ActivatedRoute) {
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
    this._callAPIGetStoreData();
  }

  private _callAPIGetStoreData() {
    this._webService.getStoreData((result: any) => {
      const data: Store = result;
      if (data) {
        const fishes = [];
        const owner = data.owner ? data.owner : '';
        Object.keys(data.fishes).map(key => {
          fishes.push(data.fishes[key]);
        });
        this.storeData = { fishes, owner };
      }
    });
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

interface StoreData {
  fishes: Fish[];
  owner: String;
}
