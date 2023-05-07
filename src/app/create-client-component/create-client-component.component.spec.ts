import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClientComponentComponent } from './create-client-component.component';

describe('CreateClientComponentComponent', () => {
  let component: CreateClientComponentComponent;
  let fixture: ComponentFixture<CreateClientComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClientComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
