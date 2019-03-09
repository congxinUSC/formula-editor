import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaBlockComponent } from './formula-block.component';

describe('FormulaBlockComponent', () => {
  let component: FormulaBlockComponent;
  let fixture: ComponentFixture<FormulaBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
