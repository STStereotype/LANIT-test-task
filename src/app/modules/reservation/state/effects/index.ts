import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ReservationPageEffects } from './reservation';
import * as actions from '@reservation/state/actions';

@Injectable()
export class ReservationEffects {
    constructor(private actions$: Actions) {}

    initReservationPage$ = createEffect(() => this.actions$.pipe(
        ofType(actions.initReservationPage),
        map(() => actions.loadResources()
        )
    ));
}

export const EFFECTS = [
    ReservationEffects,
    ReservationPageEffects
];
