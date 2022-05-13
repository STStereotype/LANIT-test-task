import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Weather } from '@shared/models';

export const empty = createAction('[Root] empty');

export const loadWeather = createAction('[Root] load weather', props<{ city: string }>());
export const loadWeatherSuccess = createAction('[Root] load weather success', props<{ city: string, weather: Weather }>());
export const loadWeatherFails = createAction('[Root] load weather fails', props<{ error: HttpErrorResponse }>());
