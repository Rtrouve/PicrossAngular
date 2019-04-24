import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoComponent } from './chrono/chrono.component';
import { RandomComponent } from './random/random.component';
import { LevelSelectionComponent } from './level-selection/level-selection.component';
import { LevelDisplayComponent } from './level-display/level-display.component';

const routes: Routes = [
  { path: 'random', component: RandomComponent, data: {animation: 'Random'}},
  { path: 'chrono', component: ChronoComponent, data: {animation: 'Chrono'}},
  { path: 'level', component: LevelSelectionComponent, data: {animation: 'Level'}},
  { path: 'level/:id', component: LevelDisplayComponent, data: {animation: 'LevelDisplay'}},
  { path: '', redirectTo: '/random', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
