import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecasesComponent } from './usecases.component';

describe('UsecasesComponent', () => {
  let component: UsecasesComponent;
  let fixture: ComponentFixture<UsecasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsecasesComponent]
    });
    fixture = TestBed.createComponent(UsecasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
