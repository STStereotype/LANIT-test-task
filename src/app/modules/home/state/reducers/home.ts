import { on } from '@ngrx/store';

import * as actions from '../actions/home';
import { HomeState } from './states';

export const HOME_REDUCERS = [
    on(actions.loadResources, (state: HomeState) => ({ ...state, resources: [] })),
    on(actions.loadResourcesSuccess, (state: HomeState, { resources }) => ({ ...state, resources }))
];
