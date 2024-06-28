import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveMatchComponent } from './approve-match.component';

describe('ApproveMatchComponent', () => {
  let component: ApproveMatchComponent;
  let fixture: ComponentFixture<ApproveMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveMatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
