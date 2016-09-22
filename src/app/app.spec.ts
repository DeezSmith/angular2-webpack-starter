import {
    inject,
    TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { App } from './app.component';
import { AppState } from './app.service';
import { GlobalState } from './infastructure/global-state-service/global.state';
import { BaThemeSpinner, BaThemePreloader } from './theme/services/';


describe('App', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEach(() => TestBed.configureTestingModule({
                                                        providers: [
                                                            BaThemePreloader,
                                                            BaThemeSpinner,
                                                            GlobalState,
                                                            AppState,
                                                            App
                                                        ]
                                                    }));

    it('should have a url', inject([ App ], (app: App) => {
        expect(app.url).toEqual('https://twitter.com/AngularClass');
    }));

});
