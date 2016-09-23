/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { OpsTheme } from './ops-theme.directive';
import { GlobalState } from '../../../infastructure/global-state-service/global.state';

describe('Directive: OpsTheme', () => {
    let directive: OpsTheme;
    let state: GlobalState;
    beforeEach(() => {
        state = new GlobalState();
        directive = new OpsTheme(state);
        directive.ngOnInit();
    });

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });

    it('should have base classes', () => {
        expect(directive.classes[0]).toBe('hold-transition');
        expect(directive.classes[1]).toBe('skin-blue');
        expect(directive.classes[2]).toBe('sidebar-mini');
    });

    it('should add class on notify', () => {
        state.notifyDataChanged('menu.isHidden', false);
        state.notifyDataChanged('menu.isCollapsed', true);

        expect(directive.classes.length).toBe(4);
    });

    it('should remove class on notify', () => {
        state.notifyDataChanged('menu.isHidden', false);
        state.notifyDataChanged('menu.isCollapsed', false);

        expect(directive.classes.length).toBe(3);
    });
});
