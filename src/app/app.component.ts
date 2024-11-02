import { Component } from '@angular/core';
import { FirstComponent } from './first-component/first-component.component';
import { SecondComponent } from './second-component/second-component.component';
import { ParentComponent } from './parent-component/parent-component.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';
import { ReusableAnimationComponent } from './reusable-animation/reusable-animation.component';
import { KeyframeAnimationComponent } from './keyframe-animation/keyframe-animation.component';
import { StateAnimationComponent } from './state-animation/state-animation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    FirstComponent,
    SecondComponent,
    ParentComponent,
    Component3Component,
    Component4Component,
    Component5Component,
    ReusableAnimationComponent,
    KeyframeAnimationComponent,
    StateAnimationComponent
  ],
  standalone: true
})
export class AppComponent {
  title = "My Angular Project!";
}
