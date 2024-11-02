import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-state-animation',
  templateUrl: './state-animation.component.html',
  styleUrls: ['./state-animation.component.css'],
  animations: [
    trigger('toggleState', [
      state('active', style({ backgroundColor: 'lightgreen', transform: 'scale(1.1)' })),
      state('inactive', style({ backgroundColor: 'lightcoral', transform: 'scale(1)' })),
      transition('inactive <=> active', animate('0.5s ease-in-out'))
    ])
  ],
  standalone: true
})
export class StateAnimationComponent {
  state = 'inactive';

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
