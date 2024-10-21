import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  doctor: string = '';
  clinic: string = '';
  day: string = '';

  constructor(private http: HttpClient) {}

  moveInfo(doctor: string, clinic: string, day: string) {
    this.day = day;
    this.doctor = doctor;
    this.clinic = clinic;
  }

  getInfo() {
    return {
      doctor: this.doctor,
      clinic: this.clinic,
      day: this.day,
    }
  }
}
