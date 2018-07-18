import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealNotifComponent } from './real-notif.component';

describe('RealNotifComponent', () => {
  let component: RealNotifComponent;
  let fixture: ComponentFixture<RealNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
