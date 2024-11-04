import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenPaintsComponent } from './men-paints.component';

describe('MenPaintsComponent', () => {
  let component: MenPaintsComponent;
  let fixture: ComponentFixture<MenPaintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenPaintsComponent]
    });
    fixture = TestBed.createComponent(MenPaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
