import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepeEditComponent } from './recepe-edit.component';

describe('RecepeEditComponent', () => {
  let component: RecepeEditComponent;
  let fixture: ComponentFixture<RecepeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
