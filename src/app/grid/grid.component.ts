import { Component, Input, OnInit } from '@angular/core';

import { Cell } from '../shared/cell';
import { GameLifeService } from '../services/game-life.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() rows: number;
  @Input() cols: number;
  grid: Cell[][];

  constructor(private gameLifeService: GameLifeService) {}

  ngOnInit() {
    this.grid = this.gameLifeService.getGrid();
  }

  toggleState(cell: Cell) {
    cell.toggleState();
  }

}
