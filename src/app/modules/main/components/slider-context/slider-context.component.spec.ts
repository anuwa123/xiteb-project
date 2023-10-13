import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderContextComponent } from './slider-context.component';

describe('SliderContextComponent', () => {
  let component: SliderContextComponent;
  let fixture: ComponentFixture<SliderContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
