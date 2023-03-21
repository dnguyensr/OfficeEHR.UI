import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Patient } from '../models/patients.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  baseApiUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseApiUrl + 'api/patients')
  }

  addPatient(addPatientRequest: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.baseApiUrl + 'api/patients', addPatientRequest)
  }

  getPatient(id: string): Observable<Patient> {
    return this.http.get<Patient>(this.baseApiUrl + 'api/patients/' + id);
  }

  updatePatient(id: string, updatePatientRequest: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.baseApiUrl + 'api/patients/' + id, updatePatientRequest)
  }

  deletePatient(id: string): Observable<Patient> {
    return this.http.delete<Patient>(this.baseApiUrl + 'api/patients/' + id);
  }
}
