import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { ControlComponent } from './control/control.component';
import { GameLifeService } from './services/game-life.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameLifeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
