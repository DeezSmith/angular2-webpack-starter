/**
 * Created by dsmith on 9/21/16.
 */
import { TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { GlobalState } from '../../../infastructure/global-state-service/global.state';
import { OpsNavNotifications } from './';
import { OpsNavNotificationsService } from './opsNavNotifications.service';
import { SvgPicturePipe } from '../../pipes/opsSvgPicture';


//Suite
describe('Theme: OpsNavNotifications', () => {
    //BASE VARS
    let fixture: any,
        comp: any;

    //Before each test run this
    beforeEach(async(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
                                           providers:    [ OpsNavNotificationsService ],
                                           declarations: [ OpsNavNotifications, SvgPicturePipe ],
                                       })
            .compileComponents();
        // create component and test fixture
        fixture = TestBed.createComponent(OpsNavNotifications);

        // get test component from the fixture
        comp = fixture.componentInstance;
    }));

    it('should be defined', () => {
        // confirm the element's content
        expect(comp).toBeDefined();
    });

});
