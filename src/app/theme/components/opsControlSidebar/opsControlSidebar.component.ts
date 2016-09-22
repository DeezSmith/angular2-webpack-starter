import { Component, OnInit, ElementRef } from '@angular/core';
import { GlobalState } from '../../../infastructure/global-state-service/global.state';

@Component({
               selector:    'ops-control-sidebar',
               templateUrl: 'opsControlSidebar.template.html',
               styleUrls:   [ 'opsControlSidebar.component.scss' ]
           })
export class OpsControlSidebar implements OnInit {

    public isControlSidebarHidden: boolean = true;

    constructor (private _state: GlobalState) {

        this._state.subscribe('controlSidebar.isHidden', (isHidden) => {
            this.isControlSidebarHidden = isHidden;
        });
    }

    public ngOnInit (): void {

    }

    public ngAfterViewInit (): void {

    }

    public controlSidebarExpand (): void {
        this.controlSidebarHideStateChange(false);
    }

    public controlSidebarHide (): void {
        this.controlSidebarHideStateChange(true);
    }

    public controlSidebarHideStateChange (isHidden: boolean): void {
        this.isControlSidebarHidden = isHidden;
        this._state.notifyDataChanged('controlSidebar.isHidden', this.isControlSidebarHidden);
    }

}
