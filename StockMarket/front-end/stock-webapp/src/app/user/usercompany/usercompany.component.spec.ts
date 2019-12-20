import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercompanyComponent } from './usercompany.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from 'src/app/search/search.component';

describe('UsercompanyComponent', () => {
  let component: UsercompanyComponent;
  let fixture: ComponentFixture<UsercompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercompanyComponent, SearchComponent ],
      imports: [FormsModule, HttpClientModule, RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.userName()).toBeDefined("Person");
    expect(component.user).toBeDefined("Person");
    expect(component.companyData).toBeUndefined();
    expect(component.filteredData).toBeUndefined();
  });


});
