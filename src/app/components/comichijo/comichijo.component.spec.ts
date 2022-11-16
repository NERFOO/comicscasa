import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComichijoComponent } from './comichijo.component';

describe('ComichijoComponent', () => {
  let component: ComichijoComponent;
  let fixture: ComponentFixture<ComichijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComichijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComichijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
