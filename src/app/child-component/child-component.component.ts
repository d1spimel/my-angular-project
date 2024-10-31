import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  standalone: true
})
export class ChildComponent {
  @Input() parentMessage!: string;
}
