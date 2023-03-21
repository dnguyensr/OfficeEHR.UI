import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsListComponent } from './components/patients/patients-list/patients-list.component';
import { AddPatientComponent } from './components/patients/add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import { EditPatientComponent } from './components/patients/edit-patient/edit-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsListComponent,
    AddPatientComponent,
    EditPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
