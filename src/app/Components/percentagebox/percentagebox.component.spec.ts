import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageboxComponent } from './percentagebox.component';

describe('PercentageboxComponent', () => {
  let component: PercentageboxComponent;
  let fixture: ComponentFixture<PercentageboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentageboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
