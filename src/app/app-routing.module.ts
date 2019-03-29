import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { DisplayGridComponent } from './display-grid/display-grid.component';
import { LevelComponent } from './level/level.component';
import { ChronoComponent } from './chrono/chrono.component';

const routes: Routes = [
  { path: 'random', component: DisplayGridComponent},
  { path: 'chrono', component: ChronoComponent},
  { path: 'level/:num', component: LevelComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
