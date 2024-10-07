import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  imgs = [
    {src: './assets/slider/slider1.jpg', alt: 'slider1'},
    {src: './assets/slider/slider2.jpg', alt: 'slider2'},
    {src: './assets/slider/slider3.jpg', alt: 'slider3'},
    {src: './assets/slider/slider4.jpg', alt: 'slider4'}
  ]

  constructor(router: Router){}

}
