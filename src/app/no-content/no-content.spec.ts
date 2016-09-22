/**
 * Created by dsmith on 9/21/16.
 */
import { TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { NoContent } from './';


//Suite
describe('No-Content', () => {
    //BASE VARS
    let fixture: any,
        comp: any;

    //Before each test run this
    beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
                                           declarations: [ NoContent ],
                                       });

        // create component and test fixture
        fixture = TestBed.createComponent(NoContent);

        // get test component from the fixture
        comp = fixture.componentInstance;
    });

    it('should be defined', () => {
        // confirm the element's content
        expect(comp).toBeDefined();
    });

    it('should display 404 title', () => {

        // trigger data binding to update the view
        fixture.detectChanges();

        // find the title element in the DOM using a CSS selector
        let el = fixture.debugElement.query(By.css('h1'));

        // confirm the element's content
        expect(el.nativeElement.textContent).toContain(comp.title);
    });
});
