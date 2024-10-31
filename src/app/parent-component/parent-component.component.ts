import { Component } from '@angular/core';
import { ChildComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  imports: [ChildComponent], // Add ChildComponent here
  standalone: true
})
export class ParentComponent {
  public message = 'Hello from Parent Component!'; // Define the message variable
}
