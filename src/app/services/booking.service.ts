import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  doctor: string = '';
  clinic: string = '';
  day: string = '';
  time: string = '';

  constructor(private http: HttpClient) {}

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
}
