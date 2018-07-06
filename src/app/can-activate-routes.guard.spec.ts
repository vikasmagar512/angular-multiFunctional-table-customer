import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateRoutesGuard } from './can-activate-routes.guard';

describe('CanActivateRoutesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateRoutesGuard]
    });
  });

  it('should ...', inject([CanActivateRoutesGuard], (guard: CanActivateRoutesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
