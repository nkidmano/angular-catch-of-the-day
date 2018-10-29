import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html'
})
export class InventoryComponent implements OnInit {
  @Input() owner: string;

  constructor() {}

  ngOnInit() {}
}
