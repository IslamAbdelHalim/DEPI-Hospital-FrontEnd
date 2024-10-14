import {Component, OnInit} from '@angular/core';
import { DoctorsService} from "../../services/doctors.service";
import {faFacebook, faYoutube, faTelegram} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-doctors-pagination',
  templateUrl: './doctors-pagination.component.html',
  styleUrl: './doctors-pagination.component.css'
})
export class DoctorsPaginationComponent implements OnInit {
  protected readonly faYoutube = faYoutube;
  protected readonly faFacebook = faFacebook;
  protected readonly faTelegram = faTelegram;

  doctorsInDB: any;
  p: number = 1;
  limit: number = 20;
  constructor(private doctorsService: DoctorsService) { }

  ngOnInit() {
    this.getDocs(this.p, this.limit);
  }

  getDocs(page: number, limit: number) {
    this.doctorsService.getDoctors(page - 1, limit).subscribe(response => {this.doctorsInDB = response.doctors;});
  }
  pageChanged(page: number) {
    this.p = page;
    this.getDocs(page, this.limit);
  }
}