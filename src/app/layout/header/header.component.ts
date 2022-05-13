import { Component } from '@angular/core';
import { CitiesEnum } from '@shared/models';

import * as selectors from '@app/state/index';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    cities = CitiesEnum;

    weather$ = this.store$.select(selectors.getWeather);

    constructor(private store$: Store) {}

}
