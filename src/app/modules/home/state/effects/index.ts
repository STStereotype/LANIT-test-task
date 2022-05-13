import { Injectable } from '@angular/core';

import { HomePageEffects } from './home';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions';
import { switchMapTo } from 'rxjs/operators';

@Injectable()
export class HomeEffects {
    constructor(private actions$: Actions) {}

    initHomePage$ = createEffect(() => this.actions$.pipe(
        ofType(actions.initHomePage),
        switchMapTo([
            actions.loadResources(),
        ])
    ));
}

export const EFFECTS = [
    HomeEffects,
    HomePageEffects
];
