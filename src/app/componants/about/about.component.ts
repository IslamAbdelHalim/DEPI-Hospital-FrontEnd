import { Component } from '@angular/core';
import { faUserNurse, faUserMd, faStethoscope, faBed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  faUserNurse = faUserNurse;
  faUserMd = faUserMd;
  faStethoscope = faStethoscope;
  faBed = faBed;
}
