import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('AdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule, HttpClientModule, RouterModule.forRoot([])]
  }));

  it('should be created', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service).toBeTruthy();
  });

  it('should have default variables', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service).toBeTruthy();
    expect(service.baseUrl).toBeDefined('http://localhost:8083/');
    
  });

});
