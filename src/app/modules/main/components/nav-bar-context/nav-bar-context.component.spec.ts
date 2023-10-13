import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarContextComponent } from './nav-bar-context.component';

describe('NavBarContextComponent', () => {
  let component: NavBarContextComponent;
  let fixture: ComponentFixture<NavBarContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
