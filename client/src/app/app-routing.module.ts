import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashEnergyInputComponent } from './dash-energy-input/dash-energy-input.component'
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './nav/nav.component';
const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "nav",
    component: NavComponent,
    children: [
      {
        path: '',
        redirectTo: 'energy-input',
        pathMatch: 'prefix'
      },
      {
          path: "energy-input",
          component: DashEnergyInputComponent       
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
