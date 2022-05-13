import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RootState } from './reducer';

export const CoreFeatureName = 'core';

export interface AppState {
    core: RootState;
}

const selectFeature = createFeatureSelector<AppState, RootState>(CoreFeatureName);

export const getWeather = createSelector(
    selectFeature,
    state => state.weather
);
