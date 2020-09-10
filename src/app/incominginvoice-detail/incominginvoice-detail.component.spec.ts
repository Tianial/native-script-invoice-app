import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncominginvoiceDetailComponent } from './incominginvoice-detail.component';

describe('IncominginvoiceDetailComponent', () => {
  let component: IncominginvoiceDetailComponent;
  let fixture: ComponentFixture<IncominginvoiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncominginvoiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncominginvoiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
