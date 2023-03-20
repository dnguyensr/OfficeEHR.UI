import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './components/patients/add-patient/add-patient.component';
import { PatientsListComponent } from './components/patients/patients-list/patients-list.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsListComponent
  },
  {
    path: 'patients',
    component: PatientsListComponent
  },
  {
    path: 'patients/add',
    component: AddPatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
