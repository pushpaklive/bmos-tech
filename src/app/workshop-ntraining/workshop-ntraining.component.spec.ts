import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopNTrainingComponent } from './workshop-ntraining.component';

describe('WorkshopNTrainingComponent', () => {
  let component: WorkshopNTrainingComponent;
  let fixture: ComponentFixture<WorkshopNTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopNTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopNTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
