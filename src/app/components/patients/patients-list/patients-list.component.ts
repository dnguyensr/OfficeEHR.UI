import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patients.model';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  patients: Patient[] = [];
  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {
    this.patientsService.getAllPatients()
    .subscribe({
      next: (patients) => {
        this.patients = patients;
        console.log(patients);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
