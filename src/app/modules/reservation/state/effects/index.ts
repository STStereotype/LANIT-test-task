import { Injectable } from '@angular/core';

import {ReservationPageEffects} from './reservation';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions';
import { switchMapTo } from 'rxjs/operators';

@Injectable()
export class ReservationEffects {
    constructor(private actions$: Actions) {}

    initReservationPage$ = createEffect(() => this.actions$.pipe(
        ofType(actions.initReservationPage),
        switchMapTo([
            actions.loadResources(),
        ])
    ));
}

export const EFFECTS = [
    ReservationEffects,
    ReservationPageEffects
];
