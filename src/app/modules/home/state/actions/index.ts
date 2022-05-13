import { createAction } from '@ngrx/store';

export * from './home';

export const empty = createAction('[Home] empty');
export const initHomePage = createAction('[Home] init home page');
