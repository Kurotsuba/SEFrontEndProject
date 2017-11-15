import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Ship } from '../ship';

@Component({
  selector: 'app-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShipDetailComponent implements OnInit {
  @Input() ship: Ship;

  constructor() { }

  ngOnInit() {
  }

}
