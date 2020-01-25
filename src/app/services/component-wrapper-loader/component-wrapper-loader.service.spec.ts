import { TestBed } from '@angular/core/testing';

import { ComponentLoaderService } from './component-wrapper-loader.service';

describe('ComponentLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentLoaderService = TestBed.get(ComponentLoaderService);
    expect(service).toBeTruthy();
  });
});
