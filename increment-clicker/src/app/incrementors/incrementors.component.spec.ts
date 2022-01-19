import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementorsComponent } from './incrementors.component';

describe('IncrementorsComponent', () => {
  let component: IncrementorsComponent;
  let fixture: ComponentFixture<IncrementorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
