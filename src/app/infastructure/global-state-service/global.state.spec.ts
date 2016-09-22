// Load the implementations that should be tested
import { GlobalState } from './global.state';


describe('Service: Global State', () => {
    let service: GlobalState;
    beforeEach(() => {
        service = new GlobalState();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should call _OnEvent', done => {
        let test = spyOn(service, '_onEvent').and.callThrough();
        service.notifyDataChanged('test:event', true);
        expect(service._onEvent).toHaveBeenCalled();
        done();
    });

    it('should remember subscriptions', done => {
       let test = spyOn(service, 'subscribe').and.callThrough();
        service.subscribe('test:event', ( ) => {});
        expect(service.subscribe).toHaveBeenCalled();
        done();
    });

    it('should broadcast event', done => {
        service.subscribe('test:event', (value) => {
            expect(value).toBe(true);
            done();
        });
        service.notifyDataChanged('test:event', true);
    });

});
