import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsumerEditComponent } from './admin-consumer-edit.component';

describe('AdminConsumerEditComponent', () => {
  let component: AdminConsumerEditComponent;
  let fixture: ComponentFixture<AdminConsumerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConsumerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsumerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
