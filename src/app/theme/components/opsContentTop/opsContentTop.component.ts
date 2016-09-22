import { Component } from '@angular/core';

import { GlobalState } from '../../../infastructure/global-state-service/global.state';

@Component({
    selector: 'ops-content-top',
    styles: [ require('./opsContentTop.scss') ],
    template: require('./opsContentTop.html'),
})
export class OpsContentTop {

    public activePageTitle: string = '';

    constructor (private _state: GlobalState) {
        this._state.subscribe('menu.activeLink', (activeLink) => {
            if (activeLink) {
                this.activePageTitle = activeLink.title;
            }
        });
    }
}
