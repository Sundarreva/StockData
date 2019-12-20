import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [FormsModule, HttpClientModule, RouterModule.forRoot([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component variables to be initilized', () => {
    expect(component.errorMsg).toBeNull();
    expect(component.userForm.username).toBeNull();
    expect(component.userForm.password).toBeNull();
    expect(component.userForm.emailid).toBeNull();
    expect(component.userForm.contactNumber).toBeNull();
  }); 

  it('created a form with username and password with login button', () => {
    const usernameContainer = fixture.debugElement.nativeElement.querySelector('#ususername');
    const passwordContainer = fixture.debugElement.nativeElement.querySelector('#uspassword');
    const contactContainer = fixture.debugElement.nativeElement.querySelector('#uscontactnumber');
    const emailContainer = fixture.debugElement.nativeElement.querySelector('#usemail');

    expect(usernameContainer).toBeDefined();
    expect(passwordContainer).toBeDefined();
    expect(contactContainer).toBeDefined();
    expect(emailContainer).toBeDefined();
  });

  it('button loading', () => {
    expect(fixture.debugElement.query(By.css('button')).properties.disabled).toBeFalsy();
  });


});
