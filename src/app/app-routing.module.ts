import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { DisplayGridComponent } from './display-grid/display-grid.component';

const routes: Routes = [
  { path: 'random', component: DisplayGridComponent},
  { path: ''}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
