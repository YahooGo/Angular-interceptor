import { TestBed, inject } from '@angular/core/testing';

import { NoopInterceptor } from './noop-interceptor.service';

describe('NoopInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoopInterceptor]
    });
  });

  it('should be created', inject([NoopInterceptor], (service: NoopInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
