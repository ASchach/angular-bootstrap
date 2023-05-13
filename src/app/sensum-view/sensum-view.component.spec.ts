import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensumViewComponent } from './sensum-view.component';

describe('SensumViewComponent', () => {
  let component: SensumViewComponent;
  let fixture: ComponentFixture<SensumViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensumViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
