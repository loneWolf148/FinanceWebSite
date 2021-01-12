import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsumerVerifyComponent } from './admin-consumer-verify.component';

describe('AdminConsumerVerifyComponent', () => {
  let component: AdminConsumerVerifyComponent;
  let fixture: ComponentFixture<AdminConsumerVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConsumerVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsumerVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
