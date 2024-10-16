import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'http://127.0.0.1:5000/auth/signup'
  constructor(private http: HttpClient) { }

  register(body: {}): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${this.apiURL}`, body);
  }

  getUser(id: string) {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(`${this.apiURL}/${id}`, { headers });
  }
}
