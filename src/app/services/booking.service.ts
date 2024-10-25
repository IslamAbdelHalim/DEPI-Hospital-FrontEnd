import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  doctor: string = '';
  clinic: string = '';
  day: string = '';
  time: string = '';

  private apiURL = 'http://127.0.0.1:5000/booking';


  constructor(private http: HttpClient, private authService: AuthService) {}

  moveInfo(doctor: string, clinic: string, day: string, time: string) {
    this.day = day;
    this.doctor = doctor;
    this.clinic = clinic;
    this.time = time;
  }

  getInfo() {
    return {
      doctor: this.doctor,
      clinic: this.clinic,
      day: this.day,
      time: this.time
    }
  }

  book(body: {}){
    const token = this.authService.getToken();
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.post(`${this.apiURL}`, body, { headers });
  }
}
