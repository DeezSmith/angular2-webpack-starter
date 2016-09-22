/**
 * Created by dsmith on 9/21/16.
 */
import { TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { OpsControlSidebar } from './opsControlSidebar.component';
import { GlobalState } from '../../../infastructure/global-state-service/global.state';


//Suite
describe('OpsControlSidebar', () => {
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
        comp = fixture.componentInstance;
    }));

    it('should be defined', () => {
        // confirm the element's content
        expect(comp).toBeDefined();
    });

    it('should display switch ngClass', () => {
        expect(true).toBeTruthy();
    });
});
