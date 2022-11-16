import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicspadreComponent } from './comicspadre.component';

describe('ComicspadreComponent', () => {
  let component: ComicspadreComponent;
  let fixture: ComponentFixture<ComicspadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicspadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicspadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
