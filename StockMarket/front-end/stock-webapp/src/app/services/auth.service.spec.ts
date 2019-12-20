import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule, HttpClientModule, RouterModule.forRoot([])]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should have a default value', () => {
    const service: AuthService = TestBed.get(AuthService);
    
    expect(service.baseUrl).toBeDefined('http://localhost:8083/');
    expect(service.token).toBeUndefined();
    expect(service.role).toBeDefined('Anonymous');
  });

  it('should have arious methods', () => {
    const service: AuthService = TestBed.get(AuthService);

    expect(service.getSignupStatus()).toBeUndefined();
    expect(service.getRole()).toBeDefined('Anonymous');
    expect(service.isLoggedIn()).toBeDefined('Anonymous');
    
  });
  

});
