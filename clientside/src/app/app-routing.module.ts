import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HomeComponent } from './components/home/home.component';
import { IncidentBasicInfoComponent } from './components/incident-basic-info/incident-basic-info.component';
import { IncidentCallsComponent } from './components/incident-calls/incident-calls.component';
import { IncidentCrewComponent } from './components/incident-crew/incident-crew.component';
import { IncidentDevicesComponent } from './components/incident-devices/incident-devices.component';
import { IncidentMultimediaComponent } from './components/incident-multimedia/incident-multimedia.component';
import { IncidentNewCallComponent } from './components/incident-new-call/incident-new-call.component';
import { IncidentResolutionComponent } from './components/incident-resolution/incident-resolution.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { NewIncidentComponent } from './components/new-incident/new-incident.component';
import { NewWorkplanBasicinfoComponent } from './components/new-workplan-basicinfo/new-workplan-basicinfo.component';
import { NewWorkplanStatesComponent } from './components/new-workplan-states/new-workplan-states.component';
import { NewWorkplanComponent } from './components/new-workplan/new-workplan.component';
import { WorkplanEquipmentComponent } from './components/workplan-equipment/workplan-equipment.component';
import { WorkplanInstructionsComponent } from './components/workplan-instructions/workplan-instructions.component';
import { WorkplanTableComponent} from './components/workplan-table/workplan-table.component';
import { NewWorkplanMultimediaComponent} from './components/new-workplan-multimedia/new-workplan-multimedia.component';
import { NotifikacijaComponent } from './components/notifikacija/notifikacija.component';
import { AllNotificationsComponent } from './components/all-notifications/all-notifications.component';
import { UnreadNotifikationsComponent } from './components/unread-notifikations/unread-notifikations.component';
import { ErrorNotifikationsComponent } from './components/error-notifikations/error-notifikations.component';
import { InfoNotifikationsComponent } from './components/info-notifikations/info-notifikations.component';
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
    path: "profile",
    component: EditProfileComponent
  },
  {
    path: "workplans",
    component:WorkplanTableComponent
  },
  {
    path: 'new-workplan',
    component:NewWorkplanComponent,
    children: [
      {
        path: '',
        redirectTo: 'workplan-basic-info',
        pathMatch: 'full'
      },
      {
        path:'workplan-basic-info',
        component: NewWorkplanBasicinfoComponent
      },
      {
        path:'workplan-state-history',
        component:NewWorkplanStatesComponent
      },
      {
        path:'multimedia-attachments',
        component:NewWorkplanMultimediaComponent
      },
      {
        path:'workplan-devices',
        component: WorkplanEquipmentComponent
      },
      {
        path:'new-workplan-instructions',
        component: WorkplanInstructionsComponent
      }
    ]
  },
  {
    path:'notifikacije',
    component: NotifikacijaComponent,
    children: [
      {
        path: '',
        redirectTo: 'all-notifications',
        pathMatch: 'full'
      },
      {
        path:'all-notifications',
        component:AllNotificationsComponent
      },
      {
        path:'unread-notifications',
        component:UnreadNotifikationsComponent
      },
      {
        path:'error-notifications',
        component:ErrorNotifikationsComponent
      },
      {
        path:'info-notifications',
        component:InfoNotifikationsComponent
      }
    ]
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
