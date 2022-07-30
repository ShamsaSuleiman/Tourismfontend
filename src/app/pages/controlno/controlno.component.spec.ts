import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlnoComponent } from './controlno.component';

describe('ControlnoComponent', () => {
  let component: ControlnoComponent;
  let fixture: ComponentFixture<ControlnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
