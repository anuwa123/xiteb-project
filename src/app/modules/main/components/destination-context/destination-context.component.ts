import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-context',
  templateUrl: './destination-context.component.html',
  styleUrls: ['./destination-context.component.scss']
})
export class DestinationContextComponent {
  destId : any=1; // Initialize destId with an appropriate data type
  selectedDestination: any;
  
  destinations = [
    { id: 1, title:'Dhonveli Maldives', image:'assets/destination/destination-1.jpg',description:'Feel an irrepressible wave of excitement as you have the best surfing experience, set to the backdrop of serenity, and pristine blue waters.', map:'assets/destination/srilanka.png'},
    { id: 2, title:'Cinnamon Grand Colombo', image:'assets/destination/destination-2.jpg',description:'Our 5-star hotel in the heart of Colombo offers timeless elegance and grandeur. The perfect place to relish global cuisines after a business conference or a memorable rendezvous!',map:'assets/destination/moldives.png' },
    { id: 3, title:'Cinnamon Lakeside Colombo', image:'assets/destination/destination-3.jpg',description:'Spend time with those who matter by a calm, rippling lake at Cinnamon Lakeside, the plush oasis of peace and warmth, right in the middle of Colombo.',map:'assets/destination/srilanka.png'},
    { id: 4, title:'Hikka Tranz by Cinnamon', image:'assets/destination/destination-4.jpg',description:'Live around the endless ocean, and feel the rising sun pump adrenaline into every nerve of yours. Let the setting sun cover you with a sense of calmness as it disappears.',map:'assets/destination/moldives.png' },
   
  ];


  updateSelectedImage() {
    this.selectedDestination = this.destinations.find(dest => dest.id === this.destId);
  }
  
  
  constructor(){
    this.selectedDestination = this.destinations.find(dest => dest.id === this.destId);
  }
}
