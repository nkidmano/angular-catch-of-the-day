import { Component, Input, OnInit } from '@angular/core';
import { Fish } from 'src/app/models/fish.model';
import { FISH_STATUS } from 'src/app/utilities/system.constants';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html'
})
export class FishComponent implements OnInit {
  @Input() fish: Fish;

  constructor() { }

  ngOnInit() {
  }

  public isAvailable() {
    if (this.fish) {
      if (this.fish.status === FISH_STATUS.AVAILABLE) {
        return true;
      }
      return false;
    }
  }

  public addToOrder(fish: Fish) {
    console.log(fish);
  }
}
