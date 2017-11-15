import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ship } from '../ship';
import { SHIPS } from '../ship-data';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShipsComponent implements OnInit {
  ships = SHIPS;
  selectedShip: Ship;

  constructor() { }

  ngOnInit() {
  }

  onSelect(ship: Ship): void{
    this.selectedShip = ship;
  }

}
