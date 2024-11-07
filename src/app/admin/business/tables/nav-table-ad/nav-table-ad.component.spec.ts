import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTableAdComponent } from './nav-table-ad.component';

describe('NavTableAdComponent', () => {
  let component: NavTableAdComponent;
  let fixture: ComponentFixture<NavTableAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavTableAdComponent]
    });
    fixture = TestBed.createComponent(NavTableAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
