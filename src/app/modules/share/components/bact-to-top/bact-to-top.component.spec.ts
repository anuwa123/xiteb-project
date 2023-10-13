import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BactToTopComponent } from './bact-to-top.component';

describe('BactToTopComponent', () => {
  let component: BactToTopComponent;
  let fixture: ComponentFixture<BactToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BactToTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BactToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
