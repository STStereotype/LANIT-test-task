import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationServicesModule } from './reservation-services.module';

import { SharedModule } from '@shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EFFECTS } from './state/effects';
import { ReservationFeatureName } from './state/selectors';
import * as reducer from './state/reducers';

import { PAGES } from './pages';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        ...PAGES
    ],
    exports: [],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,

        EffectsModule.forFeature(EFFECTS),
        StoreModule.forFeature(ReservationFeatureName, reducer.reducer),

        ReservationServicesModule,
        ReservationRoutingModule,
        SharedModule,
    ]
})

export class ReservationModule { }
