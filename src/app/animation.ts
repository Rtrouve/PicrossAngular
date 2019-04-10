import { trigger, transition, style, animateChild, animate, query, group } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Random <=> Chrono', [
        query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
        query(':leave', style({ transform: 'translateY(0%)' }), { optional: true }),
        query(':enter', style({ transform: 'translateY(-100%)' }), { optional: true }),
        group([
            query(':leave', [
                animate('600ms ease-out', style({ transform: 'translateY(-100%)' })),
            ], { optional: true }),
            query(':enter', [
                animate('600ms ease-out', style({ transform: 'translateY(0%)' })),
            ], { optional: true })
        ])
    ])
  ]);
