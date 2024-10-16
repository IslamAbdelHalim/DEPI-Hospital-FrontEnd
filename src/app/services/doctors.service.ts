import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  apiUrl = 'http://127.0.0.1:5000/api/doctors';
  constructor(private http: HttpClient) { }

  getDoctors() : Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

}
