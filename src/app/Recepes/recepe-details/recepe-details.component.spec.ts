import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepeDetailsComponent } from './recepe-details.component';

describe('RecepeDetailsComponent', () => {
  let component: RecepeDetailsComponent;
  let fixture: ComponentFixture<RecepeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
