import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlLabComponent } from './atl-lab.component';

describe('AtlLabComponent', () => {
  let component: AtlLabComponent;
  let fixture: ComponentFixture<AtlLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
