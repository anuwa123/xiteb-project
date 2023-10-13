import { Component } from '@angular/core';

@Component({
  selector: 'app-offers-context',
  templateUrl: './offers-context.component.html',
  styleUrls: ['./offers-context.component.scss']
})
export class OffersContextComponent {
  cardData = [
    {
      category: 'Rooms & Suites',
      date:'',
      title:'Shangri–La Circle Exclusive Member Rate with Breakfast',
      content: 'Exclusive Member Rate with Breakfast for Shangri-La Circle member.',
      price:'From SGD 245.32 Average Per Night',
      imageSrc: 'assets/offers/offers-1.jpg'
    },
    {
      category: 'Rooms & Suites',
      date:'',
      title:'Shangri–La Circle Exclusive Member Rate',
      content: 'Exclusive Member Rate for Shangri-La Circle member.',
      price:'From SGD 218.06 Average Per Night',
      imageSrc: 'assets/offers/offers-2.jpg'
    },
    {
      category: 'Weddings',
      date:'01 Jan 2023 - 31 Dec 2023',
      title:'Engagements and Registrations 2023',
      content: 'Begin your journey to matrimony with an intimate event for your loved ones.',
      price:'',
      imageSrc: 'assets/offers/offers-3.jpg'
    }
  ];
}
