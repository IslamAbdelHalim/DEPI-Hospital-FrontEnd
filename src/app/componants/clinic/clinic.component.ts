import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrl: './clinic.component.css'
})
export class ClinicComponent {
  @Input() clinic : string | undefined;
  @Input() img: string | undefined;
  @Input() id: string | undefined;

  constructor(private router: Router){}
}
