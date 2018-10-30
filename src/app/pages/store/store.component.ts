import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Store } from 'src/app/models/store.model';
import { WebserverService } from 'src/app/services/webserver.service';
import { SystemHelper } from 'src/app/utilities/system.helper';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html'
})
export class StoreComponent extends AppComponent implements OnInit {
  public store: Store;

  constructor(protected webService: WebserverService, private _route: ActivatedRoute) {
    super(webService);
  }

  ngOnInit() {
    this._init();
  }

  private _init() {
    const storeId = this._getStoreId();
    if (storeId) {
      this.saveStoreInfo(storeId);
      this._callAPIGetStoreData();
    }
  }

  private _callAPIGetStoreData() {
    this.webService.getStoreData(SystemHelper.storeId, (result: any) => {
      this._handlingGetStoreData(result);
    });
  }

  private _handlingGetStoreData(result: any) {
    if (result) {
      const fishes = [];
      const userId = result.userId ? result.userId : '';
      Object.keys(result.fishes).map(key => {
        fishes.push(result.fishes[key]);
      });
      this.store = { fishes, userId };
    }
  }

  private _getStoreId() {
    return this._route.snapshot.params['storeId'];
  }
}
