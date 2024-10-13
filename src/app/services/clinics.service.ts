import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import { Observable } from "rxjs";
import { Clinic} from "../models/clinic";

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {

  private apiUrl = 'http://127.0.0.1:5000/api/clinics';
  constructor(private http: HttpClient){}

  getClinics(page: number, limit: number): Observable<any> {
    return this.http.get<Clinic[]>(`${this.apiUrl}?page=${page}&limit=${limit}`)
  }
}
