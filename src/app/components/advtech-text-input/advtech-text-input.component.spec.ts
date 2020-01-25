import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvtechTextInputComponent } from './advtech-text-input.component';

describe('AdvtechTextInputComponent', () => {
  let component: AdvtechTextInputComponent;
  let fixture: ComponentFixture<AdvtechTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvtechTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvtechTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
