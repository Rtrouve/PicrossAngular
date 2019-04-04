import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelComponent } from './level/level.component';
import { ChronoComponent } from './chrono/chrono.component';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
  { path: 'random', component: RandomComponent},
  { path: 'chrono', component: ChronoComponent},
  { path: 'level/:num', component: LevelComponent},
  { path: '', redirectTo: '/random', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
