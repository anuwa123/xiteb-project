import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationContextComponent } from './destination-context.component';

describe('DestinationContextComponent', () => {
  let component: DestinationContextComponent;
  let fixture: ComponentFixture<DestinationContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
