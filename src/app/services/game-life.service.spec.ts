import { TestBed } from '@angular/core/testing';

import { GameLifeService } from './game-life.service';

describe('GameLifeService', () => {
  let service: GameLifeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameLifeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
