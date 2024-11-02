import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  standalone: true,
  animations: [
    trigger('toggleAnimation', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'lightgreen'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'lightcoral'
      })),
      transition('open <=> closed', [
        animate('0.5s')
      ])
    ])
  ]
})
export class FirstComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
