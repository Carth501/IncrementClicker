import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiceManagementComponent } from './juice-management.component';

describe('JuiceManagementComponent', () => {
  let component: JuiceManagementComponent;
  let fixture: ComponentFixture<JuiceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuiceManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
