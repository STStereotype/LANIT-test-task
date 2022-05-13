import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '@app/state/actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

    constructor(private store$: Store) {
        this.store$.dispatch(actions.loadWeather({ city: 'Tomsk' }));
        this.store$.dispatch(actions.loadWeather({ city: 'Moscow' }));
    }

    ngOnInit(): void {}
}
