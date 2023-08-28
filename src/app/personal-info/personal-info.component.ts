import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  
  infoDisplay = 'block'; // Initially set to 'block' for display

    changeDisplay() {
        this.infoDisplay = 'none';
    }

}
