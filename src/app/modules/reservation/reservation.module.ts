import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationServicesModule } from './reservation-services.module';

import { SharedModule } from '../shared/shared.module';
import { PAGES } from './pages';

@NgModule({
    declarations: [
        ...PAGES
    ],
    exports: [],
    imports: [
        CommonModule,
        RouterModule,

        ReservationServicesModule,
        ReservationRoutingModule,
        SharedModule
    ]
})

export class ReservationModule { }
