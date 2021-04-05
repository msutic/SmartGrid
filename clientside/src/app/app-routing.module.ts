import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { IncidentBasicInfoComponent } from './components/incident-basic-info/incident-basic-info.component';
import { IncidentDevicesComponent } from './components/incident-devices/incident-devices.component';
import { IncidentResolutionComponent } from './components/incident-resolution/incident-resolution.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { NewIncidentComponent } from './components/new-incident/new-incident.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "incidents",
    component: IncidentsComponent
  },
  {
    path: 'new-incident',
    component: NewIncidentComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic-info',
        pathMatch: 'full'
      },
      {
        path: 'basic-info',
        component: IncidentBasicInfoComponent
      },
      {
        path: 'devices',
        component: IncidentDevicesComponent
      },
      {
        path: 'resolution',
        component: IncidentResolutionComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
