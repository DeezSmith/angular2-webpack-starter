import { Component, ViewEncapsulation } from '@angular/core';

import { GlobalState } from '../../../infastructure/global-state-service/global.state';

@Component({
    selector: 'ops-navbar',
    styles: [ require('./opsNavbar.scss') ],
    template: require('./opsNavbar.html'),
    encapsulation: ViewEncapsulation.None
})
export class OpsNavbar {

    logo = 'assets/img/ops-logo-full.png';
    logoSm = 'assets/img/ops-logo-sm.png';

    profile = {
        name: 'Derek Smith',
        agentNo: '123408',
        icon: 'Batman'
    };

    public isScrolled: boolean = false;
    public isMenuCollapsed: boolean = false;
    public isMenuHidden: boolean = false;
    public isControlSidebarHidden: boolean = true;


    constructor (private _state: GlobalState) {
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });

        this._state.subscribe('menu.isHidden', (isHidden) => {
            this.isMenuHidden = isHidden;
        });

        this._state.subscribe('controlSidebar.isHidden', (isHidden) => {
            this.isControlSidebarHidden = isHidden;
        });
    }

    public toggleMenu () {
            this.isMenuCollapsed = !this.isMenuCollapsed;
            this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    }

    public toggleControlSidebar () {
            this.isControlSidebarHidden = !this.isControlSidebarHidden;
            this._state.notifyDataChanged('controlSidebar.isHidden', this.isControlSidebarHidden);
    }

    public scrolledChanged (isScrolled) {
        this.isScrolled = isScrolled;
    }
}
