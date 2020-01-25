import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvtechTextareaInputComponent } from './advtech-textarea-input.component';

describe('AdvtechTextareaInputComponent', () => {
  let component: AdvtechTextareaInputComponent;
  let fixture: ComponentFixture<AdvtechTextareaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvtechTextareaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvtechTextareaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
