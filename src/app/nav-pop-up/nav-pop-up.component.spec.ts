import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPopUpComponent } from './nav-pop-up.component';

describe('NavPopUpComponent', () => {
  let component: NavPopUpComponent;
  let fixture: ComponentFixture<NavPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
