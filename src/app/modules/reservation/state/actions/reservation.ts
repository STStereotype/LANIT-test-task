import { HttpErrorResponse } from '@angular/common/http';

import { createAction, props } from '@ngrx/store';

import { HotelRoomTypeModel, RoomReservationModel } from '@reservation/models';

export const loadResources = createAction('[Reservation] load resources');
export const loadResourcesSuccess = createAction('[Reservation] load resources success', props<{ resources: HotelRoomTypeModel[] }>());
export const loadResourcesFails = createAction('[Reservation] load resources fails', props<{ error: HttpErrorResponse }>());

export const sendResources = createAction('[Reservation] send resources', props<{ resources: RoomReservationModel }>());
export const sendResourcesSuccess = createAction('[Reservation] send resources success');
export const sendResourcesFails = createAction('[Reservation] send resources fails', props<{ error: HttpErrorResponse }>());
