import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
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
    SafetyDocsComponent,
    NewSafetydocComponent,
    SafetydocBasicinfoComponent,
    SafetydocChecklistComponent,
    DevicesComponent,
    NewDeviceComponent,
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

