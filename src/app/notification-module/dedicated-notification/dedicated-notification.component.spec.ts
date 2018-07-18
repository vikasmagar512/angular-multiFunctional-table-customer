import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicatedNotificationComponent } from './dedicated-notification.component';

describe('DedicatedNotificationComponent', () => {
  let component: DedicatedNotificationComponent;
  let fixture: ComponentFixture<DedicatedNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DedicatedNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DedicatedNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
