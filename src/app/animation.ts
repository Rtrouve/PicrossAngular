import { trigger, transition, style, animateChild, animate, query, group } from '@angular/animations';

export const slideInAnimation =
trigger('routeAnimations', [
    transition('Random => Chrono', [
        query(':enter, :leave, app-explanation, #separation', style({
            position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
        query(':leave', style({ transform: 'translateY(0%)' }), { optional: true }),
        query(':enter', style({ transform: 'translateY(-100%)' }), { optional: true }),
        query('#separation, app-explanation', style({ transform: 'translateY(82%)' }), { optional: true }),
        group([
            query(':leave', [
                animate('400ms', style({ transform: 'translateY(-100%)' })),
            ], { optional: true }),
            query(':enter', [
                animate('400ms', style({ transform: 'translateY(0%)' })),
            ], { optional: true }),
            query('#separation, app-explanation', [
                animate('400ms', style({ transform: 'translateY(70%)' })),
            ], { optional: true })

        ])
    ]),
    transition('Chrono => Random', [
        query(':enter, :leave, app-explanation, #separation', style({
            position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
        query(':leave', style({ transform: 'translateY(0%)' }), { optional: true }),
        query(':enter', style({ transform: 'translateY(-100%)' }), { optional: true }),
        query('#separation, app-explanation', style({ transform: 'translateY(70%)' }), { optional: true }),
        group([
            query(':leave', [
                animate('400ms', style({ transform: 'translateY(-100%)' })),
            ], { optional: true }),
            query(':enter', [
                animate('400ms', style({ transform: 'translateY(0%)' })),
            ], { optional: true }),
            query('#separation, app-explanation', [
                animate('400ms', style({ transform: 'translateY(82%)' })),
            ], { optional: true })

        ])
    ])
]);
