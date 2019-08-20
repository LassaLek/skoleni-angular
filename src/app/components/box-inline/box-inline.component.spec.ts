import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxInlineComponent } from './box-inline.component';

describe('BoxInlineComponent', () => {
  let component: BoxInlineComponent;
  let fixture: ComponentFixture<BoxInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
