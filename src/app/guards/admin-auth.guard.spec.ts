import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AdminAuthGuard } from './admin-auth.guard';

describe('AdminAuthGuard', () => {
  let guard: AdminAuthGuard;
  let mockRouter: jasmine.SpyObj<Router>;


  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['parseUrl']);

    TestBed.configureTestingModule({
      providers: [
        AdminAuthGuard,
        { provide: Router, useValue: mockRouter }
      ]
    });


    guard = TestBed.inject(AdminAuthGuard);
  });


  it('should allow access when userRole is admin', () => {
    localStorage.setItem('userRole', 'admin');
    const canActivate = guard.canActivate();
    expect(canActivate).toBeTrue();
  });


  it('should deny access and redirect if userRole is not admin', () => {
    localStorage.setItem('userRole', 'customer');
    guard.canActivate();

    expect(mockRouter.parseUrl).toHaveBeenCalledWith('/home');
  });
});
