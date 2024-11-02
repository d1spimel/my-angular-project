import { Component } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-keyframe-animation',
  templateUrl: './keyframe-animation.component.html',
  styleUrls: ['./keyframe-animation.component.css'],
  animations: [ // Переконайтеся, що анімація тут оголошена
    trigger('keyframeAnimation', [
      transition(':enter', [
        animate('1s', keyframes([
          style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
          style({ opacity: 0.5, transform: 'translateY(15px)', offset: 0.5 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
        ]))
      ])
    ])
  ],
  standalone: true
})
export class KeyframeAnimationComponent { }
