import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsumerDeleteComponent } from './admin-consumer-delete.component';

describe('AdminConsumerDeleteComponent', () => {
  let component: AdminConsumerDeleteComponent;
  let fixture: ComponentFixture<AdminConsumerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConsumerDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsumerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
