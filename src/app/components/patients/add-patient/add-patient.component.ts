import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patients.model';
import { PatientsService } from 'src/app/services/patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  addPatientRequest: Patient = {
    patientId: 0,
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    phoneNumber: '',
    email: ''
  }

  constructor(private patientsService: PatientsService, private router: Router) {  }

  ngOnInit(): void {
  }
  
  addPatient() {
    this.patientsService.addPatient(this.addPatientRequest)
    .subscribe({
      next: (patient) => {
        this.router.navigate(['patients']);
      }
    })
  }
}
