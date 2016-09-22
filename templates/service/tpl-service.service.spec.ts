/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TplServiceService } from './tpl-service.service';

describe('Service: TplService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TplServiceService]
    });
  });

  it('should ...', inject([TplServiceService], (service: TplServiceService) => {
    expect(service).toBeTruthy();
  }));
});
