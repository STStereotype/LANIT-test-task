import { Injectable } from '@angular/core';

import { ReservationServicesModule } from '../reservation-services.module';

@Injectable({
    providedIn: ReservationServicesModule
})
export class AppUrlService {

    constructor() { }

    loadInfo(): string {
        return ``;
    }

    sendInfo(): string {
        return ``;
    }
}
