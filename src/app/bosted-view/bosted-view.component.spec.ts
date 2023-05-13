import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BostedViewComponent } from './bosted-view.component';

describe('BostedViewComponent', () => {
  let component: BostedViewComponent;
  let fixture: ComponentFixture<BostedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BostedViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BostedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
