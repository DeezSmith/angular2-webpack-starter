/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import './infastructure/inital.loader.ts';

import { AppState } from './app.service';
import { GlobalState } from './infastructure/global-state-service/global.state';
import { BaThemePreloader, BaThemeSpinner } from './theme/services/';


///require("./AdminLTE");

/*
 * App Component
 * Top Level Component
 */
@Component({
               selector:      'app',
               encapsulation: ViewEncapsulation.None,
               styleUrls:     [
                   '../assets/css/AdminLTE.css',
                   '../assets/css/skins/skin-blue.css',
                   './app.style.scss'
               ],
               templateUrl:   './layout.html'
           })
export class App {

    name = 'Angular 2 Webpack Starter';
    url = 'https://twitter.com/AngularClass';
    isMenuCollapsed: boolean = false;
    isMenuHidden: boolean = false;

    constructor (public appState: AppState, private _state: GlobalState, private _spinner: BaThemeSpinner) {
        this._state.subscribe('menu.isHidden', (isHidden) => {
            this.isMenuHidden = isHidden;
        });
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;

            if (!this.isMenuHidden) {
                jQuery('body').toggleClass('sidebar-collapse');
            } else {
                if (this.isMenuCollapsed) {
                    jQuery('body').removeClass('sidebar-open').removeClass('sidebar-collapse');
                } else {
                    jQuery('body').addClass('sidebar-open');
                }
            }


        });


        jQuery('.content-wrapper').click(function () {
            if (!this.isMenuCollapsed && this.isMenuHidden) {
                jQuery('body').removeClass('sidebar-open');
            }
        });
    }

    ngOnInit () {
        console.log(window[ 'AdminLTE' ]);
        //  setTimeout(window['AdminLTE'].layout.fix(), 5000);
        console.log('Initial App State', this.appState.state);

    }

    public ngAfterViewInit (): void {
        // hide spinner once all loaders are completed
        BaThemePreloader.load().then((values) => {
            this._spinner.hide();
        });
    }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
