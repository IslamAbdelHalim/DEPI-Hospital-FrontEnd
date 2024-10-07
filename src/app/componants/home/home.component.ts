import { Component } from '@angular/core';
import { faUserNurse, faUserMd, faHandHoldingMedical, faStethoscope, faBed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faUserNurse = faUserNurse;
  faUserMd = faUserMd;
  faHandHoldingMedical = faHandHoldingMedical;
  faStethoscope = faStethoscope;
  faBed = faBed;

}
