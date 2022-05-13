import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { RoutingEffects } from './state/effects';

@NgModule({
    declarations: [],
    exports: [ ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([RoutingEffects]),
    ]
})
export class NavigationModule { }
