import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '@app/state/actions';
import { Weather } from '@shared/models';

export interface RootState {
    module: string;
    weather: { [city: string]: Weather };
}

export const initialState: RootState = {
    module: null,
    weather: {}
};

export const ROOT_REDUCERS = [
    on(actions.loadWeather, (state: RootState, { city }) => ({ ...state, weather: { ... state.weather, [ city ]: null } })),
    on(actions.loadWeatherSuccess, (state: RootState, { city, weather }) => ({ ...state, weather: { ... state.weather, [ city ]: weather } })),
];

const rootReducers = createReducer(
    initialState,
    ...ROOT_REDUCERS
);

export function reducer(state: RootState, action: Action) {
    return rootReducers(state, action);
}
