import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashEnergyInputComponent } from './dash-energy-input/dash-energy-input.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { EnergyInputTypeComponent } from './dash-energy-input/components/energy-input-type/energy-input-type.component';
import { EnergyInputKpiComponent } from './dash-energy-input/components/energy-input-kpi/energy-input-kpi.component';
import { CardComponent } from './core/components/card/card.component';
import { EnergyInputDataComponent } from './dash-energy-input/components/energy-input-data/energy-input-data.component';
import { LoadingAnimaComponent } from './core/components/loading-anima/loading-anima.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { FormsModule } from '@angular/forms';
import { CostMediuMwhComponent } from './dash-energy-input/components/charts/bar-cost-mediu-mwh-total/cost-mediu-mwh.component';
import { CostMediuMwhPieteComponent } from './dash-energy-input/components/charts/bar-cost-mediu-mwh-piete/cost-mediu-mwh-piete.component';
import { CostMediuMwhProductieComponent } from './dash-energy-input/components/charts/bar-cost-mediu-mwh-productie/cost-mediu-mwh-productie.component';
import { IntrariEnergieTotalComponent } from './dash-energy-input/components/charts/doughnut-intrari-energie-total/intrari-energie-total.component';
import { HorizontalBarCostMediuMwhStackComponent } from './dash-energy-input/components/charts/horizontal-bar-cost-mediu-mwh-stack/horizontal-bar-cost-mediu-mwh-stack.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashEnergyInputComponent,
    EnergyInputTypeComponent,
    EnergyInputKpiComponent,
    CardComponent,
    EnergyInputDataComponent,
    LoadingAnimaComponent,
    LandingPageComponent,
    CostMediuMwhComponent,
    CostMediuMwhPieteComponent,
    CostMediuMwhProductieComponent,
    IntrariEnergieTotalComponent,
    HorizontalBarCostMediuMwhStackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
