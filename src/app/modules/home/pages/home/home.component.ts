import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as selectors from '@home/state/selectors';
import * as actions from '@home/state/actions';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    blocks$ = this.store$.select(selectors.getResources);

    constructor(private store$: Store) {
        this.store$.dispatch(actions.initHomePage());
    }
}
