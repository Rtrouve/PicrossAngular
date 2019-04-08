import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoComponent } from './chrono/chrono.component';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
  { path: 'random', component: RandomComponent},
  { path: 'chrono', component: ChronoComponent},
  { path: '', redirectTo: '/random', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
