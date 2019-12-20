import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileupdateComponent } from './userprofileupdate.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('UserprofileupdateComponent', () => {
  let component: UserprofileupdateComponent;
  let fixture: ComponentFixture<UserprofileupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofileupdateComponent ],
      imports: [FormsModule, HttpClientModule, RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofileupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default value of variables', () => {
    expect(component.user).toBeDefined('Person');
    expect(component.userForm.username).toBeNull();
    expect(component.userForm.password).toBeNull();
    expect(component.userForm.contactNumber).toBeNull();
    expect(component.userForm.emailid).toBeNull();
    expect(component.userName()).toBeDefined("Person");
  });

  it('created a form for update number and mail', () => {
    const usernameContainer = fixture.debugElement.nativeElement.querySelector('#ususername');
    const passwordContainer = fixture.debugElement.nativeElement.querySelector('#uspassword');
    const contactContainer = fixture.debugElement.nativeElement.querySelector('#uscontactnumber');
    const emailContainer = fixture.debugElement.nativeElement.querySelector('#usemail');

    expect(usernameContainer).toBeDefined();
    expect(passwordContainer).toBeDefined();
    expect(contactContainer).toBeDefined();
    expect(emailContainer).toBeDefined();
  });


});
