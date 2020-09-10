import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoinginvoiceDetailComponent } from './outgoinginvoice-detail.component';

describe('OutgoinginvoiceDetailComponent', () => {
  let component: OutgoinginvoiceDetailComponent;
  let fixture: ComponentFixture<OutgoinginvoiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutgoinginvoiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoinginvoiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
