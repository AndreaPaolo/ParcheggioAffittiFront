import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SedeComponent } from './sede/sede.component';
import { ParcheggioComponent } from './parcheggio/parcheggio.component';
import { AffittuatarioComponent } from './affittuatario/affittuatario.component';
import { AffittoComponent } from './affitto/affitto.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'sede', component:SedeComponent },
  { path: 'parcheggio', component:ParcheggioComponent },
  { path: 'affittuatario', component:AffittuatarioComponent },
  { path: 'affitto', component:AffittoComponent },
  { path: '', component:DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
