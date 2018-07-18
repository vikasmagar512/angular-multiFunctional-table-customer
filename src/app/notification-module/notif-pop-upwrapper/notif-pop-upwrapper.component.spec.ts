import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifPopUPWrapperComponent } from './notif-pop-upwrapper.component';

describe('NotifPopUPWrapperComponent', () => {
  let component: NotifPopUPWrapperComponent;
  let fixture: ComponentFixture<NotifPopUPWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifPopUPWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifPopUPWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
