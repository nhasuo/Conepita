import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreerviewComponent } from './streerview.component';

describe('StreerviewComponent', () => {
  let component: StreerviewComponent;
  let fixture: ComponentFixture<StreerviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreerviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
