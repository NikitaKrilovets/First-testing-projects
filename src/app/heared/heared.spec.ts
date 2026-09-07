import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heared } from './heared';

describe('Heared', () => {
  let component: Heared;
  let fixture: ComponentFixture<Heared>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heared],
    }).compileComponents();

    fixture = TestBed.createComponent(Heared);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
