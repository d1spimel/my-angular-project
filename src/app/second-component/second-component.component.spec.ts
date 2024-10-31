import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
  standalone: true // if using standalone components
})
export class SecondComponent { }  // Make sure this is the correct class name
