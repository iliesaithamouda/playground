import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';



@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    GamesRoutingModule,
    RouterModule
  ]
})
export class GamesModule { }
