import { HotelRoomTypeModel } from '@reservation/models';

export interface ReservationState {
    resources: HotelRoomTypeModel[];
}

export const initialState: ReservationState = {
    resources: []
};
