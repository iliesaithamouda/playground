import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConferencesComponent } from './conferences/conferences.component';
import { GamesComponent } from './games.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
  { path: '', component: GamesComponent ,
  children: [
    {
      path: 'sales', // child route path
      component: SalesComponent, // child route component that the router renders
    },
    {
      path: 'conferences',
      component: ConferencesComponent, // another child route component that the router renders
    },
  ],}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GamesRoutingModule { }
