import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTriggerComponent } from './modal-trigger.component';

describe('ModalTriggerComponent', () => {
  let component: ModalTriggerComponent;
  let fixture: ComponentFixture<ModalTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalTriggerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
