import { TestBed } from '@angular/core/testing';

import { ProfileListServiceService } from './profile-list-service.service';

describe('ProfileListServiceService', () => {
  let service: ProfileListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
