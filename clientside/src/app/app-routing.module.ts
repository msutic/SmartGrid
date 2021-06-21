import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
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
import { SuccessNotifikationsComponent } from './components/success-notifikations/success-notifikations.component';
import { WarningNotifikationsComponent } from './components/warning-notifikations/warning-notifikations.component';
import { PotrosaciComponent } from './components/potrosaci/potrosaci.component';
import { NewConsumerComponent } from './components/new-consumer/new-consumer.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DevicesComponent } from './components/device/devices/devices.component';
import { HomeComponent } from './components/home/home.component';
import { IncidentBasicInfoComponent } from './components/incident/incident-basic-info/incident-basic-info.component';
import { IncidentCallsComponent } from './components/incident/incident-calls/incident-calls.component';
import { IncidentCrewComponent } from './components/incident/incident-crew/incident-crew.component';
import { IncidentDevicesComponent } from './components/incident/incident-devices/incident-devices.component';
import { IncidentMultimediaComponent } from './components/incident/incident-multimedia/incident-multimedia.component';
import { IncidentNewCallComponent } from './components/incident/incident-new-call/incident-new-call.component';
import { IncidentResolutionComponent } from './components/incident/incident-resolution/incident-resolution.component';
import { IncidentsComponent } from './components/incident/incidents/incidents.component';
import { NewDeviceComponent } from './components/device/new-device/new-device.component';
import { NewIncidentComponent } from './components/incident/new-incident/new-incident.component';
import { NewSafetydocComponent } from './components/safety-doc/new-safetydoc/new-safetydoc.component';
import { SafetyDocsComponent } from './components/safety-doc/safety-docs/safety-docs.component';
import { SafetydocBasicinfoComponent } from './components/safety-doc/safetydoc-basicinfo/safetydoc-basicinfo.component';
import { SafetydocChecklistComponent } from './components/safety-doc/safetydoc-checklist/safetydoc-checklist.component';
import { AdminsGuard } from './guards/admins.guard';
import { SafetydocDevicesComponent } from './components/safety-doc/safetydoc-devices/safetydoc-devices.component';
import { NonregisteredGuard } from './guards/nonregistered.guard';
import { EditConsumerComponent } from './components/edit-consumer/edit-consumer.component';
import { ZahteviComponent } from './components/zahtevi/zahtevi.component';
import { TestImagesComponent } from './components/test-images/test-images.component';
import { WorkplanPreviewComponent } from './components/workplan-preview/workplan-preview.component';

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
    path:'potrosaci',
  
    children:[
      {
        path:'',
        component:PotrosaciComponent
      },
      {
        path: ':id/edit',
        component: NewConsumerComponent
      },
      {
        path: 'new',
        component: NewConsumerComponent
      }
    ]
  },
  {
    path:'settings',
    component:SettingsComponent,
    canActivate:[AdminsGuard]
  },
  {
    path:'new-consumer',
    component:NewConsumerComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [NonregisteredGuard]
  },
  {
    path: "zahtevi",
    component: ZahteviComponent,
  },
  {
    path: "profile",
    component: EditProfileComponent,
    canActivate: [NonregisteredGuard]
  },
  {
    path: "workplans",
    children:[
      {
        path:'',
        component:WorkplanTableComponent
      },
      {
        path:':id/edit',
        component:WorkplanPreviewComponent
      }
    ]
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
    canActivate:[NonregisteredGuard],
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
      },
      {
        path:'success-notifications',
        component:SuccessNotifikationsComponent
      },
      {
        path:'warning-notifications',
        component:WarningNotifikationsComponent
      },
    ]
  },
  {
    path: "incidents",
    canActivate: [NonregisteredGuard],
    children: [
      {
        path: '',
        component: IncidentsComponent
      },
      {
        path: 'new',
        component: NewIncidentComponent,
        canActivate: [AdminsGuard],
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
    path: 'safetydocs',
    canActivate: [NonregisteredGuard],
    children: [
      {
        path: '',
        component: SafetyDocsComponent,
      },
      {
        path: 'new',
        component: NewSafetydocComponent,
        canActivate: [AdminsGuard],
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
          {
            path: 'devices',
            component: SafetydocDevicesComponent,
          },
        ]
      }
    ]
  },
  {
    path: 'devices',
    canActivate: [NonregisteredGuard],
    children: [
      {
        path: '',
        component: DevicesComponent
      },
      {
        path: 'new',
        component: NewDeviceComponent,
        canActivate: [AdminsGuard],
      },
      {
        path: ':id/edit',
        component: NewDeviceComponent,
        canActivate: [AdminsGuard]
      },
      {
        path: ':id/delete',
        component: DevicesComponent,
        canActivate: [AdminsGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
