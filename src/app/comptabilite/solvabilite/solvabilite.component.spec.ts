import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvabiliteComponent } from './solvabilite.component';

describe('SolvabiliteComponent', () => {
  let component: SolvabiliteComponent;
  let fixture: ComponentFixture<SolvabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolvabiliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolvabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
