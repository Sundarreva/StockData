import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule, HttpClientModule, RouterModule.forRoot([])]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should be variable declared and defined', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeDefined('http://localhost:8083');
  });
});
