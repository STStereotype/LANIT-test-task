import { createFeatureSelector } from '@ngrx/store';

import * as routerSelectors from '@navigation/state';

import { HomeState } from '../reducers';

export const HomeFeatureName = 'home';

export interface AppState extends routerSelectors.AppState {
    home: HomeState;
}

export const selectFeature = createFeatureSelector<AppState, HomeState>(HomeFeatureName);
