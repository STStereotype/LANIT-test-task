import { createSelector } from '@ngrx/store';
import { selectFeature } from './states';

export const getResources = createSelector(
    selectFeature,
    state => state.resources
);
