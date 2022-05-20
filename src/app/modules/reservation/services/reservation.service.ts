import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ReservationServicesModule } from '../reservation-services.module';
import { HotelRoomTypeModel, RoomReservationModel} from '@reservation/models';
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
                name: 'Семейный (до 4-х гостей)'
            },
            {
                id: 3,
                name: 'Двухкомнатный (до 6-ти гостей)'
            },
            {
                id: 4,
                name: 'Люкс двухместный'
            }
        ]);
    }

    sendInfo(data: RoomReservationModel): Observable<any> {
        // const url = this.urls.sendInfo();
        // return this.http.post<RoomReservationModel>(url, data).pipe(
        //     catchError(error => {
        //         return throwError(error);
        //     })
        // );
        console.log(data);
        return of({});
    }
}
