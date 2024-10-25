import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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

  @Output() dataLoaded: EventEmitter<boolean> = new EventEmitter<boolean>();

  doctorsInDB: any;
  p: number = 1;
  itemsPerPage: number = 3;
  total: any;
  constructor(private doctorsService: DoctorsService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.getDocs();
    this.setupResponsive();
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
    this.p = event;
  }

  setupResponsive(){
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large]).subscribe((result) => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.itemsPerPage = 1
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.itemsPerPage = 2;
      } else if ((result.breakpoints[Breakpoints.Medium])) {
        this.itemsPerPage = 3;
      } else {
        this.itemsPerPage = 4
      }

      this.p = 1;
    })
  }
}