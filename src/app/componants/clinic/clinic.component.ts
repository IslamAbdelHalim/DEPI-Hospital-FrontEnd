import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrl: './clinic.component.css'
})
export class ClinicComponent {
  @Input() clinic : string | undefined;
  @Input() img: string | undefined;
}
