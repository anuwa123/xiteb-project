import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersContextComponent } from './offers-context.component';

describe('OffersContextComponent', () => {
  let component: OffersContextComponent;
  let fixture: ComponentFixture<OffersContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
