import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateClientComponent } from './modal-update-client.component';

describe('ModalUpdateClientComponent', () => {
  let component: ModalUpdateClientComponent;
  let fixture: ComponentFixture<ModalUpdateClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUpdateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
