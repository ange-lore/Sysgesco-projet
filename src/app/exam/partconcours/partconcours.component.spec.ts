import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartconcoursComponent } from './partconcours.component';

describe('PartconcoursComponent', () => {
  let component: PartconcoursComponent;
  let fixture: ComponentFixture<PartconcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartconcoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartconcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
