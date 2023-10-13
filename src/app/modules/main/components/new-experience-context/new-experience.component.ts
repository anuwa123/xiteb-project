import { Component } from '@angular/core';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.scss']
})
export class NewExperienceComponent {
  slidesStore= [
    {id: '1', image: 'assets/hotel.jpeg', alt:'image-1', title:'MULTIPLY YOUR POINTS' },
    {id: '2', image: 'assets/hotel-2.jpg', alt:'image-2', title:'GET AWAY & SAVE MORE'},
    {id: '3', image: 'assets/hotel-3.jpeg', alt:'image-3', title:'EARN UP TO 130K POINTS'},
    {id: '4', image: 'assets/hotel-4.jpeg', alt:'image-4', title:'A NIGHT ON US'},
    {id: '5', image: 'assets/hotel-5.jpg', alt:'image-5', title:'3 NIGHTS UNDER $250'},
    {id: '6', image: 'assets/hotel-5.jpg', alt:'image-5', title:'EARN UP TO 3X PINTS'}
  ];
}
