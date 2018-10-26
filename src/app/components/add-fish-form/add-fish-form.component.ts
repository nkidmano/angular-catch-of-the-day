import { Component, OnInit } from '@angular/core';
import { WebserverService } from 'src/app/services/webserver.service';
import { SystemHelper } from 'src/app/utilities/system.helper';

@Component({
  selector: 'app-add-fish-form',
  templateUrl: './add-fish-form.component.html'
})
export class AddFishFormComponent implements OnInit {

  constructor(private _webService: WebserverService) { }

  ngOnInit() {
  }

  public btnLoadSampleFishes_click() {
    this._webService.loadSampleFishes(SystemHelper.storeId);
  }
}
