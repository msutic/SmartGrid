import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EditProfileComponent} from './components/edit-profile/edit-profile.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { IncidentsComponent } from './components/incident/incidents/incidents.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NewIncidentComponent } from './components/incident/new-incident/new-incident.component';
import { IncidentBasicInfoComponent } from './components/incident/incident-basic-info/incident-basic-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { IncidentDevicesComponent } from './components/incident/incident-devices/incident-devices.component';
import { IncidentResolutionComponent } from './components/incident/incident-resolution/incident-resolution.component';
import { IncidentCallsComponent } from './components/incident/incident-calls/incident-calls.component';
import { IncidentNewCallComponent } from './components/incident/incident-new-call/incident-new-call.component';
import { IncidentCrewComponent } from './components/incident/incident-crew/incident-crew.component';
import { IncidentMultimediaComponent } from './components/incident/incident-multimedia/incident-multimedia.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';
import { WorkplanTableComponent } from './components/workplan-table/workplan-table.component';
import { RouterModule } from '@angular/router';
import { NewWorkplanComponent } from './components/new-workplan/new-workplan.component';
import { NewWorkplanBasicinfoComponent } from './components/new-workplan-basicinfo/new-workplan-basicinfo.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NewWorkplanStatesComponent } from './components/new-workplan-states/new-workplan-states.component';
import { NewWorkplanMultimediaComponent } from './components/new-workplan-multimedia/new-workplan-multimedia.component';
import { WorkplanEquipmentComponent } from './components/workplan-equipment/workplan-equipment.component';
import { WorkplanInstructionsComponent } from './components/workplan-instructions/workplan-instructions.component';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
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
import { SafetyDocsComponent } from './components/safety-doc/safety-docs/safety-docs.component';
import { NewSafetydocComponent } from './components/safety-doc/new-safetydoc/new-safetydoc.component';
import { SafetydocBasicinfoComponent } from './components/safety-doc/safetydoc-basicinfo/safetydoc-basicinfo.component';
import { SafetydocChecklistComponent } from './components/safety-doc/safetydoc-checklist/safetydoc-checklist.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DevicesComponent } from './components/device/devices/devices.component';
import { NewDeviceComponent } from './components/device/new-device/new-device.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { DeviceService } from './services/device.service';
import { HttpClientModule } from '@angular/common/http';
import { IncidentService } from './services/incident/incident.service';
import { SafetydocDevicesComponent } from './components/safety-doc/safetydoc-devices/safetydoc-devices.component';
import { EditConsumerComponent } from './components/edit-consumer/edit-consumer.component';
import { ZahteviComponent } from './components/zahtevi/zahtevi.component';
import { TestImagesComponent } from './components/test-images/test-images.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    IncidentsComponent,
    NewIncidentComponent,
    IncidentBasicInfoComponent,
    IncidentDevicesComponent,
    IncidentResolutionComponent,
    IncidentCallsComponent,
    IncidentNewCallComponent,
    IncidentCrewComponent,
    IncidentMultimediaComponent,
    EditProfileComponent,
    WorkplanTableComponent,
    NewWorkplanComponent,
    NewWorkplanBasicinfoComponent,
    NewWorkplanStatesComponent,
    NewWorkplanMultimediaComponent,
    WorkplanEquipmentComponent,
    WorkplanInstructionsComponent,
    NotifikacijaComponent,
    AllNotificationsComponent,
    UnreadNotifikationsComponent,
    ErrorNotifikationsComponent,
    InfoNotifikationsComponent,
    SuccessNotifikationsComponent,
    WarningNotifikationsComponent,
    PotrosaciComponent,
    NewConsumerComponent,
    SettingsComponent,
    SafetyDocsComponent,
    NewSafetydocComponent,
    SafetydocBasicinfoComponent,
    SafetydocChecklistComponent,
    DevicesComponent,
    NewDeviceComponent,
    SafetydocDevicesComponent,
    EditConsumerComponent,
    ZahteviComponent,
    TestImagesComponent
  ],
  exports:[
    NewConsumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModalModule,
    MatRadioModule,
    MatAutocompleteModule,
    HttpClientModule,
    BrowserModule,
    MatProgressBarModule,
    MatCardModule,
    //!environment.production ? StoreDevtoolsModule.instrument() : [],
    MatSlideToggleModule,
    NgApexchartsModule,
    HttpClientModule,
  ],
  providers: [
    DeviceService,
    IncidentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export interface DeviceData {
  id: number;
  type: string;
  name: string;
  address: string;
  x_coordinate: number;
  y_coordinate: number;
}

