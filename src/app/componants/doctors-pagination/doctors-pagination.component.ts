import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { DoctorsService} from "../../services/doctors.service";
import {faFacebook, faYoutube, faTelegram} from "@fortawesome/free-brands-svg-icons";
import { error } from 'console';

@Component({
  selector: 'app-doctors-pagination',
  templateUrl: './doctors-pagination.component.html',
  styleUrl: './doctors-pagination.component.css'
})
export class DoctorsPaginationComponent implements OnInit {
  protected readonly faYoutube = faYoutube;
  protected readonly faFacebook = faFacebook;
  protected readonly faTelegram = faTelegram;

  @Output() dataLoaded: EventEmitter<boolean> = new EventEmitter<boolean>();

  doctorsInDB: any;
  page: number = 1;
  total: any;
  constructor(private doctorsService: DoctorsService) { }

  ngOnInit() {
    this.getDocs();
  }

  getDocs() {
    this.doctorsService.getDoctors().subscribe(
    (response )=> {
      this.doctorsInDB = response.doctors;
      this.total = this.doctorsInDB.length;
      this.dataLoaded.emit(true);
    }, (error) => {
      console.log('error fetching data');
      this.dataLoaded.emit(false)
    });
  }
  pageChanged(event: any) {
    this.page = event;
  }
}