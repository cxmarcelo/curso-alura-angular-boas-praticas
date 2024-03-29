import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsListComponent } from './animals-list.component';

describe('ListaAnimaisComponent', () => {
  let component: AnimalsListComponent;
  let fixture: ComponentFixture<AnimalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
