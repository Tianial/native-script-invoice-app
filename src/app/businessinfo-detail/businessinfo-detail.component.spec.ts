import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessinfoDetailComponent } from './businessinfo-detail.component';

describe('BusinessinfoDetailComponent', () => {
  let component: BusinessinfoDetailComponent;
  let fixture: ComponentFixture<BusinessinfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessinfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessinfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
