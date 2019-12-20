import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportexcelComponent } from './importexcel.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('ImportexcelComponent', () => {
  let component: ImportexcelComponent;
  let fixture: ComponentFixture<ImportexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportexcelComponent ],
      imports: [FormsModule, HttpClientModule, RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
