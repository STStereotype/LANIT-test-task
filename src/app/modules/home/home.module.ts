import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';

import { HomeRoutingModule } from './home-routing.module';
import { HomeServicesModule } from './home-services.module';

import { SharedModule } from '@shared/shared.module';

import { HomeFeatureName } from './state/selectors';
import { EFFECTS } from './state/effects';
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

        EffectsModule.forFeature(EFFECTS),
        StoreModule.forFeature(HomeFeatureName, reducer.reducer),

        HomeServicesModule,
        HomeRoutingModule,
        SharedModule
    ],
    providers: []
})
export class HomeModule { }
