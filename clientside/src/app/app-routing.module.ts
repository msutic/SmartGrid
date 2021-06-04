import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DevicesComponent } from './components/devices/devices.component';
import { HomeComponent } from './components/home/home.component';
import { IncidentBasicInfoComponent } from './components/incident-basic-info/incident-basic-info.component';
import { IncidentCallsComponent } from './components/incident-calls/incident-calls.component';
import { IncidentCrewComponent } from './components/incident-crew/incident-crew.component';
import { IncidentDevicesComponent } from './components/incident-devices/incident-devices.component';
import { IncidentMultimediaComponent } from './components/incident-multimedia/incident-multimedia.component';
import { IncidentNewCallComponent } from './components/incident-new-call/incident-new-call.component';
import { IncidentResolutionComponent } from './components/incident-resolution/incident-resolution.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { NewDeviceComponent } from './components/new-device/new-device.component';
import { NewIncidentComponent } from './components/new-incident/new-incident.component';
import { NewSafetydocComponent } from './components/new-safetydoc/new-safetydoc.component';
import { SafetyDocsComponent } from './components/safety-docs/safety-docs.component';
import { SafetydocBasicinfoComponent } from './components/safetydoc-basicinfo/safetydoc-basicinfo.component';
import { SafetydocChecklistComponent } from './components/safetydoc-checklist/safetydoc-checklist.component';

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
    children: [
      {
        path: '',
        component: IncidentsComponent
      },
      {
        path: 'new',
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
          {
            path: 'calls',
            component: IncidentCallsComponent
          },
          {
            path: 'new-call',
            component: IncidentNewCallComponent
          },
          {
            path: 'crew',
            component: IncidentCrewComponent
          },
          {
            path: 'multimedia-attachments',
            component: IncidentMultimediaComponent
          },
        ]
      }
    ]
  },
  {
    path: 'safety-docs',
    children: [
      {
        path: '',
        component: SafetyDocsComponent,
      },
      {
        path: 'new',
        component: NewSafetydocComponent,
        children: [
          {
            path: '',
            redirectTo: 'basicinfo',
            pathMatch: 'full',
          },
          {
            path: 'basicinfo',
            component: SafetydocBasicinfoComponent,
          },
          {
            path: 'checklist',
            component: SafetydocChecklistComponent,
          },
        ]
      }
    ]
  },
  {
    path: 'devices',
    children: [
      {
        path: '',
        component: DevicesComponent
      },
      {
        path: 'new',
        component: NewDeviceComponent
      },
      {
        path: ':id/edit',
        component: NewDeviceComponent
      },
      {
        path: ':id/delete',
        component: DevicesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
