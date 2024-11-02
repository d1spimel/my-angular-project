import { Component } from '@angular/core';
import { reusableFadeIn } from '../animations/reusable-animation';

@Component({
  selector: 'app-reusable-animation',
  templateUrl: './reusable-animation.component.html',
  styleUrls: ['./reusable-animation.component.css'],
  animations: [reusableFadeIn],
  standalone: true
})
export class ReusableAnimationComponent { }
