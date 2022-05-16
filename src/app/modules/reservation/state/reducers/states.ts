import { HotelRoomTypeModel } from '../../models/reservation.model';

export interface ReservationState {
    resources: HotelRoomTypeModel[];
}

export const initialState: ReservationState = {
    resources: []
};
