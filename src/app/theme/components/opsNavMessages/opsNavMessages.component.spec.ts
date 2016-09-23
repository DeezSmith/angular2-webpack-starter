/**
 * Created by dsmith on 9/21/16.
 */
import { TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { GlobalState } from '../../../infastructure/global-state-service/global.state';
import { OpsNavMessages } from './';
import { OpsNavMessagesService } from './opsNavMessages.service';
import { SvgPicturePipe } from '../../pipes/opsSvgPicture';


//Suite
describe('Theme: OpsNavMessages', () => {
    //BASE VARS
    let fixture: any,
        comp: any;

    //Before each test run this
    beforeEach(async(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
                                           providers:    [ OpsNavMessagesService ],
                                           declarations: [ OpsNavMessages, SvgPicturePipe ],
                                       })
            .compileComponents();
        // create component and test fixture
        fixture = TestBed.createComponent(OpsNavMessages);

        // get test component from the fixture
        comp = fixture.componentInstance;
    }));

    it('should be defined', () => {
        // confirm the element's content
        expect(comp).toBeDefined();
    });

    it('should display unread count', () => {
        comp.unreadCount = 5;
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('span.label'));
        expect(el.nativeElement.textContent).toContain('5');
    });

    it('should hide unread count', () => {
        comp.unreadCount = 0;
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('span.label'));
        expect(el).toBeNull();
    });

});
