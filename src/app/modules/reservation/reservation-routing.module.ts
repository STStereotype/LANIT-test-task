import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservationComponent } from './pages';
import { ModulesInfo } from '../index';

const routes: Routes = [
    {
        path: '',
        component: ReservationComponent,
        data: { mode: ModulesInfo.reservation.name, needNavigationInsideTheModule: false }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class ReservationRoutingModule { }
