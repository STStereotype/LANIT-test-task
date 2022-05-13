import { createReducer, Action } from '@ngrx/store';

import { HomeState, initialState } from './states';

import { HOME_REDUCERS } from './home';

export * from './states';

const homeReducers = createReducer(
    initialState,
    ...HOME_REDUCERS,
);

export function reducer(state: HomeState, action: Action) {
    return homeReducers(state, action);
}
