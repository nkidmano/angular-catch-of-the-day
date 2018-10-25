import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html'
})
export class FishComponent implements OnInit {
  @Input() fish;
  public isAvailable: boolean;

  constructor() { }

  ngOnInit() {
  }

  public addToOrder() {}

}
