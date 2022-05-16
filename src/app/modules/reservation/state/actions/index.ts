import { createAction } from '@ngrx/store';

export * from './reservation';

export const empty = createAction('[Reservation] empty');
export const initReservationPage = createAction('[Reservation] init reservation page');
