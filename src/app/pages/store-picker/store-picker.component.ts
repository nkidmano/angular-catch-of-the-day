import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemHelper } from 'src/app/utilities/system.helper';

@Component({
  selector: 'app-store-picker',
  templateUrl: './store-picker.component.html'
})
export class StorePickerComponent implements OnInit {
  public defaultValue = '';

  constructor(private _router: Router) {}

  ngOnInit() {
    this._getRandomStoreId();
  }

  public btnVisitStore_click(storeId: string) {
    this._router.navigate(['/store/' + storeId]);
  }

  private _getRandomStoreId() {
    this.defaultValue = SystemHelper.getFunName();
  }
}
