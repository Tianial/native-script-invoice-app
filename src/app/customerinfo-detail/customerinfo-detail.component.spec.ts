import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerinfoDetailComponent } from './customerinfo-detail.component';

describe('CustomerinfoDetailComponent', () => {
  let component: CustomerinfoDetailComponent;
  let fixture: ComponentFixture<CustomerinfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerinfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerinfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
