import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [{provide: Router, useValue: routerSpy}]
    })
    .compileComponents();
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'registration'`, () => {
    expect(component.title).toEqual('registration');
  });

  it('should create a FormGroup comprised of FormControls', () => {
    component.ngOnInit();
    
});

it('should return false if the form control is not valid', () => {
  component.ngOnInit();
  
});

it('should return true for valid if the form control is valid', () => {
  component.ngOnInit();

});


describe('invalid form', () => {

it('should return valid as false if the form control is invalid', () => {
  component.ngOnInit();
  
});
});
});
