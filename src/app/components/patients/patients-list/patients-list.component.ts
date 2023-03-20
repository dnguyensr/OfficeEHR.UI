import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patients.model';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  patients: Patient[] = [
      {
        id: 1,
        name: 'John Doe',
        gender: 'Male',
        address: '123 Happy Lane',
        phonenumber: '800555555',
        email: 'johndoe@example.com'
    },
    {
        id: 2,
        name: 'Jane Doe',
        gender: 'Female',
        address: '123 Happy Lane',
        phonenumber: '800555555',
        email: 'janedoe@example.com'
    },
    {
        id: 3,
        name: 'Juan Doe',
        gender: 'Male',
        address: '1234 Happy Lane',
        phonenumber: '800555555',
        email: 'juandoe@example.com'
    }
  ];
  constructor() {}

  ngOnInit(): void {
    this.patients.push()
  }
}
