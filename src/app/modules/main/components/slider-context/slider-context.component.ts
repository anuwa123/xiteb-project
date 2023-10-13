import { Component, ViewChild } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider-context',
  templateUrl: './slider-context.component.html',
  styleUrls: ['./slider-context.component.scss']
})
export class SliderContextComponent{
  
  slidesStore= [
    {id: '1', image: 'assets/destination-1.jpg', alt:'image-1', title:'Shangri-la Colombo', description:'come with us through the whimsical world of Shangri-la, Where your personal paradise waits'},
    {id: '2', image: 'assets/slider-1.jpg', alt:'image-2', title:'Shangri-la Colombo', description:'A personal tropical sanctuary set within the heart of the city'},
    {id: '3', image: 'assets/slider-6.jpg', alt:'image-3', title:'Rooms & Suites', description:'Tastefully designed with the modern traveler in the mind'},
    {id: '4', image: 'assets/slider-10.jpg', alt:'image-4', title:'Shang Palace', description:'Celebrate the art of chinese cuisine in the heart of Colombo'},
    {id: '5', image: 'assets/slider-5.jpg', alt:'image-5', title:'Tiki Bar', description:'Raise your spirits with our infused beverages and island cuisine'},
  ];

  customOptions: OwlOptions = { 
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    center:true,
    navSpeed: 800,
    navText: ['', ''],
    responsive: {
      0: {
        items: 0
      },
      400: {
        items: 0
      },
      740: {
        items: 1
      },
      940: {
        items:1
      }
    },
  
  }
  
}
