import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Actions, ofType, createEffect } from '@ngrx/effects';

import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import * as actions from '../actions';
import { ReservationService } from '../../services';

@Injectable()
export class ReservationPageEffects {
    constructor(private actions$: Actions,
                private store$: Store,
                private reservation: ReservationService
    ) { }

    loadResources$ = createEffect(() => this.actions$.pipe(
        ofType(actions.loadResources),
        switchMap(() => this.reservation.loadInfo().pipe(
            map(resources => actions.loadResourcesSuccess({ resources })),
            catchError(error => of(actions.loadResourcesFails({ error })))
        ))
    ));
}
