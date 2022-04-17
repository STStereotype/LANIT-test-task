import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ReservationServicesModule } from '../reservation-services.module';
import { HotelRoomTypeModel } from '@shared/models/reservation.model';
import { AppUrlService } from './app-url.service';

@Injectable({
    providedIn: ReservationServicesModule
})
export class ReservationService {

    constructor(private http: HttpClient, private urls: AppUrlService) { }

    loadInfo(): Observable<HotelRoomTypeModel[]> {
        // const url = this.urls.loadInfo();
        // return this.http.get<{ payload: BlockLinkModel[] }>(url).pipe(
        //     map(x => x.payload)
        // );
        return of([
            {
                id: 0,
                name: 'Стандарт одноместный'
            },
            {
                id: 1,
                name: 'Стандарт двухместный'
            },
            {
                id: 2,
                name: 'Двухкомнатный (до 6-ти гостей)'
            },
            {
                id: 3,
                name: 'Люкс двухместный'
            }
        ]);
    }
}
