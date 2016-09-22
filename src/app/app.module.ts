import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './infastructure/environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InteralStateType } from './app.service';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { XLarge } from './home/x-large';
//import { MdInputModule } from '@angular2-material/input/input';


import {
    GlobalState
} from './infastructure/global-state-service/global.state';
import { ThemeModule } from './theme/theme.module';

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState,
    GlobalState
];

type StoreType = {
    state: InteralStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [ App ],
    declarations: [
        App,
        About,
        Home,
        NoContent,
        XLarge
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        FormsModule,
        HttpModule,
      //  MdInputModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
        ThemeModule

    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule {
    constructor (public appRef: ApplicationRef, public appState: AppState) {
    }

    hmrOnInit (store: StoreType) {
        if (!store || !store.state) return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            let restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    hmrOnDestroy (store: StoreType) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // save state
        const state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy (store: StoreType) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }

}

