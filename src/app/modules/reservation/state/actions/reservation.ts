import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { HotelRoomTypeModel } from '../../models/reservation.model';

export const loadResources = createAction('[Reservation] load resources');
export const loadResourcesSuccess = createAction('[Reservation] load resources success', props<{ resources: HotelRoomTypeModel[] }>());
export const loadResourcesFails = createAction('[Reservation] load resources fails', props<{ error: HttpErrorResponse }>());
