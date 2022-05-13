import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherService } from '@shared/services';
import * as actions from '@app/state/actions';


@Injectable()
export class RootEffects {
    constructor(private actions$: Actions,
                private store$: Store,
                private weatherService: WeatherService
    ) { }

    loadWeather$ = createEffect(() => this.actions$.pipe(
        ofType(actions.loadWeather),
        switchMap(({ city }) => this.weatherService.getWeather(city).pipe(
            map(response => actions.loadWeatherSuccess(response)),
            catchError(error => of(actions.loadWeatherFails({ error })))
        ))
    ));

}
