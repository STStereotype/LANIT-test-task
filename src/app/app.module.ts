import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { SignalREffects, signalrReducer } from 'ngrx-signalr-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LAYOUTS } from './layout';
import { SharedModule } from '@shared/shared.module';

import { reducer } from '@app/state/reducer';
import { RootEffects } from '@app/state/effects';
import { NavigationModule } from '@navigation/navigation.module';

@NgModule({
    declarations: [
        AppComponent,
        ...LAYOUTS
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,

        StoreModule.forRoot({
            signalr: signalrReducer,
            router: routerReducer,
            core: reducer,
        }),
        EffectsModule.forRoot([RootEffects, SignalREffects]),
        AppRoutingModule,
        SharedModule,
        NavigationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
