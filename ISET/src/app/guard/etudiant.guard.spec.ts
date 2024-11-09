import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { EtudiantGuard } from './etudiant.guard';

describe('EtudiantGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => EtudiantGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
