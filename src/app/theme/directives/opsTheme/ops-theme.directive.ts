import { Directive, HostBinding, ElementRef, Renderer } from '@angular/core';
import { GlobalState } from '../../../infastructure/global-state-service/global.state';

@Directive({
               selector: '[opsTheme]'
           })
export class OpsTheme {
    isMenuCollapsed: boolean = false;
    isMenuHidden: boolean = false;
    classes: Array<string> = [];

    constructor (private _state: GlobalState) {
        this._state.subscribe('menu.isHidden', (isHidden) => {
            this.isMenuHidden = isHidden;
        });
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;

            if (!this.isMenuHidden) {
                if (this.isMenuCollapsed) {
                    this._addClass('sidebar-collapse');
                }
                else {
                    this._removeClass('sidebar-collapse');
                }
            } else {
                if (this.isMenuCollapsed) {
                    this._removeClass('sidebar-open');
                    this._removeClass('sidebar-collapse');
                } else {
                    this._addClass('sidebar-open');
                }
            }


        });


        jQuery('.content-wrapper').click(function () {
            if (!this.isMenuCollapsed && this.isMenuHidden) {
                jQuery('body').removeClass('sidebar-open');
            }
        });
    }

    public ngOnInit (): void {
        this._addClass('hold-transition');
        this._addClass('skin-blue');
        this._addClass('sidebar-mini');
    }


    private _addClass (cls: string) {
        this.classes.push(cls);
       jQuery('body').addClass(cls);
    }

    private _removeClass (cls: string) {
        let index = this.classes.indexOf(cls);
        if (index > -1) {
            this.classes.splice(index, 1);
            jQuery('body').removeClass(cls);
        }
    }
}
