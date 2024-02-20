import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('scrollTransition', [
      // Define your animation states (e.g., 'visible' and 'hidden')
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      // Specify the transitions between states
      transition('visible => hidden', animate('1000ms ease-out')),
      transition('hidden => visible', animate('1000ms ease-in')),
    ]),
  ],
})
export class ProjectComponent {
  scrollStateIndoorFarmer: string = 'visible';
  scrollStateRealEstate: string = 'hidden';
  scrollStateCreditCard: string = 'hidden';
  scrollStateMovieRental: string = 'hidden';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Here you can implement your logic to determine when to change the scroll state
    // For example, you might want to change it when the user scrolls past a certain point
    if (window.scrollY > 0 && window.scrollY < 1000) { // Change 100 to your desired scroll position
      this.scrollStateIndoorFarmer = 'visible';
      this.scrollStateRealEstate = 'hidden';
      this.scrollStateCreditCard = 'hidden';
      this.scrollStateMovieRental = 'hidden';
    }
    else if(window.scrollY > 1000 && window.scrollY < 1500) {
      this.scrollStateIndoorFarmer = 'hidden';
      this.scrollStateRealEstate = 'visible';
      this.scrollStateCreditCard = 'hidden';
      this.scrollStateMovieRental = 'hidden';
    }
    else if(window.scrollY > 1500 && window.scrollY < 2000) {
      this.scrollStateIndoorFarmer = 'hidden';
      this.scrollStateRealEstate = 'hidden';
      this.scrollStateCreditCard = 'visible';
      this.scrollStateMovieRental = 'hidden';
    }
    else if(window.scrollY > 2000) {
      this.scrollStateIndoorFarmer = 'hidden';
      this.scrollStateRealEstate = 'hidden';
      this.scrollStateCreditCard = 'hidden';
      this.scrollStateMovieRental = 'visible';
    }
  }
}
