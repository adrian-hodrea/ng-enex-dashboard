import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashEnergyInputComponent } from './dash-energy-input/dash-energy-input.component'


const routes: Routes = [
  {
    path: "energy-input",
    component: DashEnergyInputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
