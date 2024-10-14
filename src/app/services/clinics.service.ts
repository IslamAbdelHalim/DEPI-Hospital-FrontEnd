import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, of, tap } from "rxjs";
import { Clinic} from "../models/clinic";

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {
  private cacheClinic = new Map<string, any>();
  private apiUrl = 'http://127.0.0.1:5000/api/clinics';

  constructor(private http: HttpClient){}

  getClinics(): Observable<any> {
    const cachingData = this.cacheClinic.get('clinics')
    if (cachingData) {
      return of(cachingData);
    } else {
      return this.fetchData().pipe(tap(data => this.cacheClinic.set('clinic', data)));
    }
  }

  getClinic(id: string){
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  private fetchData(): Observable<any> {
    return this.http.get<Clinic[]>(`${this.apiUrl}`)
  }
}
