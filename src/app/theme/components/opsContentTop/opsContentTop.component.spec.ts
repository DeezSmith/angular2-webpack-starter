/**
 * Created by dsmith on 9/21/16.
 */
import { TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { GlobalState } from '../../../infastructure/global-state-service/global.state';
import { OpsContentTop } from './';


//Suite
describe('Theme: OpsContentTop', () => {
    //BASE VARS
    let fixture: any,
        comp: any;

    //Before each test run this
    beforeEach(async(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
                                           providers:    [ GlobalState ],
                                           declarations: [ OpsContentTop ],
                                       })
            .compileComponents();
        // create component and test fixture
        fixture = TestBed.createComponent(OpsContentTop);

        // get test component from the fixture
        comp = fixture.componentInstance; //<-- This is the Class
    }));

    it('should be defined', () => {
        // confirm the element's content
        expect(comp).toBeDefined();
    });

    it('should display activeLink title', () => {
        //Pull DOM
        let el = fixture.debugElement.query(By.css('h1'));

        //How to pull a service defined in the TestBed
        let state = TestBed.get(GlobalState);
        //send a notification
        state.notifyDataChanged('menu.activeLink', {title: 'Test'});
        //Have Angular Refresh DOM
        fixture.detectChanges();

        //Did Class get added?
        expect(el.nativeElement.textContent).toContain('Test');

        //Switch var manually
        comp.activePageTitle = "Test2";
        fixture.detectChanges();
        expect(el.nativeElement.textContent).toContain('Test2');
    });
});
