import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/models/patients.model';
import { PatientsService } from 'src/app/services/patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  patientDetails: Patient = {
    patientId: 0,
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    phoneNumber: '',
    email: ''
  }

  constructor(private route: ActivatedRoute, private patientService: PatientsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const patientId = params.get('patientId')

        if (patientId) {
          this.patientService.getPatient(patientId)
          .subscribe({
            next: (response) => {
              this.patientDetails = response;
            }
          })
        }
      }
    })
  }


  updatePatient() {
    this.patientService.updatePatient(this.patientDetails.patientId.toString(), this.patientDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['patients']);
      }
    })
  }

  deletePatient(patientId: string) {
    this.patientService.deletePatient(patientId)
    .subscribe({
      next: (response) => {
        this.router.navigate(['patients']);
      }
    })
  }
}
