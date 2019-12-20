import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, HttpClientModule, RouterModule.forRoot([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('created a form with username and password with login button', () => {
    const usernameContainer = fixture.debugElement.nativeElement.querySelector('#user');
    const passwordContainer = fixture.debugElement.nativeElement.querySelector('#psd');
    const form = fixture.debugElement.nativeElement.querySelector('#loginForm');
    expect(usernameContainer).toBeDefined();
    expect(passwordContainer).toBeDefined();
  });

  it('button loading', () => {
    expect(fixture.debugElement.query(By.css('button')).properties.disabled).toBeFalsy();
  });

  it('component variables to be initilized', () => {
    expect(component.signupStatus).toBeUndefined();
    expect(component.errorMessage).toBe('');
    expect(component.username).toBeUndefined();
    expect(component.password).toBeUndefined();
  });




});
