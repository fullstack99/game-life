import { Component, OnInit } from '@angular/core';
import { GameLifeService } from './services/game-life.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rows = 100;
  cols = 100;
  title = 'conway-game-life';

  constructor(private gameLifeService: GameLifeService) {}

  ngOnInit() {
    this.gameLifeService.initialize(this.rows, this.cols);
    this.gameLifeService.randomizeCellStates();
  }
}
