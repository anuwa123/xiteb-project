import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderContextComponent } from './top-header-context.component';

describe('TopHeaderContextComponent', () => {
  let component: TopHeaderContextComponent;
  let fixture: ComponentFixture<TopHeaderContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeaderContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHeaderContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
