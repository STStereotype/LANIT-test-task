import { createReducer, Action } from '@ngrx/store';

import { ReservationState, initialState } from './states';

import { RESERVATION_REDUCERS } from './reservation';

export * from './states';

const reservationReducers = createReducer(
    initialState,
    ...RESERVATION_REDUCERS,
);

export function reducer(state: ReservationState, action: Action) {
    return reservationReducers(state, action);
}
