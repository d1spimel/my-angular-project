// reusable-animation.ts
import { animate, style, transition, trigger } from '@angular/animations';

export const reusableFadeIn = trigger('fadeIn', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate('1s', style({ opacity: 1 }))
  ])
]);