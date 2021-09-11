
import {
  animate,
  AnimationTriggerMetadata,
  style, transition, trigger
} from "@angular/animations";

export function ContentAnimation(): AnimationTriggerMetadata {
  return trigger('contentAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      animate('300ms', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
      animate('0ms', style({ opacity: 0, transform: 'translateY(10px)' })),
    ]),
  ])
}
