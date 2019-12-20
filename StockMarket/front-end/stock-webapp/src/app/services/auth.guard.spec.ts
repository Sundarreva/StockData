import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard],
      imports: [FormsModule, HttpClientModule, RouterModule.forRoot([])]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should have variables for guard', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
    console.log(guard.canActivate.toString()); 
  }));


});
