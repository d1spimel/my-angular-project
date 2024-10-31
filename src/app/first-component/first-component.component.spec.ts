import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  standalone: true // if using standalone components
})
export class FirstComponent { }  // Make sure this is the correct class name
