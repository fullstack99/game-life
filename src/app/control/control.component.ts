import { Component, OnInit } from '@angular/core';

import { GameLifeService } from '../services/game-life.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  private intervalId: number;
  private _isRunning: boolean;
  private _reset: boolean = false;

  constructor(private gameLifeService: GameLifeService) {}

  get isRunning() {
    return this._isRunning;
  }

  ngOnInit() {
    this.start();
  }

  start() {
    this.intervalId = window.setInterval(() => {
      this.gameLifeService.nextGeneration();
    }, 100);
    this._isRunning = true;
    if(this._reset) {
      this.gameLifeService.randomizeCellStates()
    }
  }

  stop() {
    window.clearInterval(this.intervalId);
    this._isRunning = false;
    this._reset = false;
  }

  getGenerationCount() {
    return this.gameLifeService.generationCount;
  }

  reset() {
    this.stop();
    this.gameLifeService.reset();
    this._reset = true;
  }

}
