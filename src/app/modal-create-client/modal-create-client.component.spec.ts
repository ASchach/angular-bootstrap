import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateClientComponent } from './modal-create-client.component';

describe('ModalCreateClientComponent', () => {
  let component: ModalCreateClientComponent;
  let fixture: ComponentFixture<ModalCreateClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
