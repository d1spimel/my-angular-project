import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  standalone: true
})
export class ChildComponent {  // Make sure this class name matches your import
  @Input() parentMessage!: string;
}
