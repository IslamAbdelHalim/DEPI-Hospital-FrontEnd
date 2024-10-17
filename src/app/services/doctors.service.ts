import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private cacheDoctors = new Map<string, any>(); 
  apiUrl = 'http://127.0.0.1:5000/api/doctors';
  constructor(private http: HttpClient) { }

  getDoctors() : Observable<any> {
    const doctors = this.cacheDoctors.get('doctors');
    if (doctors) {
      return of(doctors)
    } else {
      return this.http.get(`${this.apiUrl}`).pipe(tap(data => this.cacheDoctors.set('doctors', doctors)));
    }
    
  }

}