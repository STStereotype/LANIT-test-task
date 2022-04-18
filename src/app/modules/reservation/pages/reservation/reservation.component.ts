import {Component, OnInit} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {HotelRoomTypeModel} from '../../../shared/models/reservation.model';
import {ReservationService} from '../../services';

@Component({
    selector: 'app-reservation',
    templateUrl: './reservation.component.html'
})

export class ReservationComponent implements OnInit  {

    hotelRoomType: HotelRoomTypeModel[];

    constructor(private hotelRoomTypeService: ReservationService) {}

    ngOnInit(): void {
        this.hotelRoomTypeService.loadInfo().pipe(
            map(data => {
                this.hotelRoomType = data;
            }),
            catchError(error => {
                console.error(error);
                return [];
            })
        ).subscribe();
    }
}
