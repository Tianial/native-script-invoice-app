import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsListComponent } from './tabs-list.component';

describe('TabsListComponent', () => {
  let component: TabsListComponent;
  let fixture: ComponentFixture<TabsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
