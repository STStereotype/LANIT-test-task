import { createFeatureSelector } from '@ngrx/store';

import * as routerSelectors from '@navigation/state';

import { ReservationState } from '../reducers';

export const ReservationFeatureName = 'reservation';

export interface AppState extends routerSelectors.AppState {
    reservation: ReservationState;
}

export const selectFeature = createFeatureSelector<AppState, ReservationState>(ReservationFeatureName);
