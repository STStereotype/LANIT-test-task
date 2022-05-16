import { on } from '@ngrx/store';

import * as actions from '../actions/reservation';
import { ReservationState } from './states';

export const RESERVATION_REDUCERS = [
    on(actions.loadResources, (state: ReservationState) => ({ ...state, resources: [] })),
    on(actions.loadResourcesSuccess, (state: ReservationState, { resources }) => ({ ...state, resources }))
];
