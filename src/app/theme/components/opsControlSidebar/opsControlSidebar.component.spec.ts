/**
 * Created by dsmith on 9/21/16.
 */
import { TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { OpsControlSidebar } from './opsControlSidebar.component';
import { GlobalState } from '../../../infastructure/global-state-service/global.state';


//Suite
describe('Theme: OpsControlSidebar', () => {
    //BASE VARS
    let fixture: any,
        comp: any;

    //Before each test run this
    beforeEach(async(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
                                           providers:    [ GlobalState ],
                                           declarations: [ OpsControlSidebar ],
                                       })
            .compileComponents();
        // create component and test fixture
        fixture = TestBed.createComponent(OpsControlSidebar);

        // get test component from the fixture
        comp = fixture.componentInstance; //<-- This is the Class
    }));

    it('should be defined', () => {
        // confirm the element's content
        expect(comp).toBeDefined();
    });

    it('should display show/hide using ngClass', () => {
        //Pull DOM
        let el = fixture.debugElement.query(By.css('aside'));

        //How to pull a service defined in the TestBed
        let state = TestBed.get(GlobalState);
        //send a notification
        state.notifyDataChanged('controlSidebar.isHidden', false);
        //Have Angular Refresh DOM
        fixture.detectChanges();

        //Did Class get added?
        expect(el.classes[ 'control-sidebar-open' ]).toBeTruthy();

        //Switch var manually
        comp.isControlSidebarHidden = true;
        fixture.detectChanges();
        expect(el.classes[ 'control-sidebar-open' ]).toBeFalsy();
    });
});
