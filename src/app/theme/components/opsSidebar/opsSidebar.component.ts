import { Component, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';
import { GlobalState } from '../../../infastructure/global-state-service/global.state';
import { layoutSizes } from '../../../theme';
import { MENU } from '../../../../app/app.menu';
import * as _ from 'lodash';

@Component({
               selector:      'ops-sidebar',
               encapsulation: ViewEncapsulation.None,
               styles:        [ require('./opsSidebar.scss') ],
               template:      require('./opsSidebar.html'),
               providers:     [],
           })
export class OpsSidebar {

    // here we declare which routes we want to use as a menu in our sidebar
    public routes = _.cloneDeep(MENU); // we're creating a deep copy since we are going to change that object

    public menuHeight: number;
    public isMenuCollapsed: boolean = false;
    public isMenuShouldCollapsed: boolean = false;
    public isMenuShouldHidden: boolean = false;
    public isMenuHidden: boolean = false;

    constructor (private _elementRef: ElementRef, private _state: GlobalState) {

        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });

        this._state.subscribe('menu.isHidden', (isHidden) => {
            this.isMenuHidden = isHidden;
        });
    }

    public ngOnInit (): void {
        if (this._shouldMenuCollapse()) {
            this.menuCollapse();
        }
        if (this._shouldMenuHide()) {
            this.menuHide();
        }

        //TODO: FIX to send state
        jQuery('.content-wrapper').click(function () {
            //Enable hide menu when clicking on the content-wrapper on small screens
            if (jQuery('body').hasClass('sidebar-open')) {
                jQuery('body').removeClass('sidebar-open');
            }
        });

    }

    public ngAfterViewInit (): void {
        setTimeout(() => this.updateSidebarHeight());
    }

    @HostListener('window:resize')
    public onWindowResize (): void {

        let isMenuShouldCollapsed = this._shouldMenuCollapse();

        if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
            this.menuCollapseStateChange(isMenuShouldCollapsed);
        }
        this.isMenuShouldCollapsed = isMenuShouldCollapsed;

        let isMenuShouldHide = this._shouldMenuHide();

        if (this.isMenuShouldHidden !== isMenuShouldHide) {
            this.menuHideStateChange(isMenuShouldHide);
        }
        this.isMenuShouldHidden = isMenuShouldHide;

        this.updateSidebarHeight();
    }

    public  menuExpand (): void {
        this.menuCollapseStateChange(false);
    }

    public    menuCollapse (): void {
        this.menuCollapseStateChange(true);
    }

    public    menuHide (): void {
        this.menuHideStateChange(true);
    }

    public    menuCollapseStateChange (isCollapsed: boolean): void {
        this.isMenuCollapsed = isCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    }

    public    menuHideStateChange (isHidden: boolean): void {
        this.isMenuHidden = isHidden;
        this._state.notifyDataChanged('menu.isHidden', this.isMenuHidden);
    }

    public    updateSidebarHeight (): void {
        // TODO: get rid of magic 84 constant
        this.menuHeight = this._elementRef.nativeElement.childNodes[ 0 ].clientHeight - 84;
    }

    private    _shouldMenuCollapse (): boolean {
        return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
    }

    private    _shouldMenuHide (): boolean {
        return window.innerWidth <= layoutSizes.resWidthHideSidebar;
    }
}
