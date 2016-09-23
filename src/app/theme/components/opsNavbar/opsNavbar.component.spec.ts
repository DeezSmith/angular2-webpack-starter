/**
 * Created by dsmith on 9/21/16.
 */
import { TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { GlobalState } from '../../../infastructure/global-state-service/global.state';
import { OpsNavbar } from './';
import { SvgPicturePipe } from '../../pipes/opsSvgPicture';
import { OpsNavNotifications } from '../opsNavNotifications';
import { OpsNavUserProfile } from '../opsNavUserProfile';
import { OpsNavMessages } from '../opsNavMessages';


//Suite
describe('Theme: OpsNavbar', () => {
    //BASE VARS
    let fixture: any,
        comp: any;

    //Before each test run this
    beforeEach(async(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
                                           providers:    [ GlobalState ],
                                           declarations: [
                                               OpsNavbar,
                                               SvgPicturePipe,
                                               OpsNavMessages,
                                               OpsNavNotifications,
                                               OpsNavUserProfile
                                           ],
                                       })
            .compileComponents();
        // create component and test fixture
        fixture = TestBed.createComponent(OpsNavbar);

        // get test component from the fixture
        comp = fixture.componentInstance;
    }));

    it('should be defined', () => {
        // confirm the element's content
        expect(comp).toBeDefined();
    });

    it('should be have defaults set', () => {
        fixture.detectChanges();
        expect(comp.isControlSidebarHidden).toBe(true);
        expect(comp.isMenuHidden).toBe(false);
        expect(comp.isMenuCollapsed).toBe(false);
        expect(comp.logo).toBeDefined();
        expect(comp.logoSm).toBeDefined();
    });


    it('should send notification for sidebar ', () => {
        let state = TestBed.get(GlobalState);
        spyOn(state, 'notifyDataChanged');
        expect(comp.isMenuCollapsed).toBe(false);
        comp.toggleMenu();
        expect(comp.isMenuCollapsed).toBe(true);
        expect(state.notifyDataChanged).toHaveBeenCalled();
    });

    it('should send notification for controlbar ', () => {
        let state = TestBed.get(GlobalState);
        spyOn(state, 'notifyDataChanged');
        expect(comp.isControlSidebarHidden).toBe(true);
       comp.toggleControlSidebar();
        expect(comp.isControlSidebarHidden).toBe(false);
        expect(state.notifyDataChanged).toHaveBeenCalled();
    });

});
