import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsAndConsComponent } from './pros-and-cons.component';

describe('ProsAndConsComponent', () => {
  let component: ProsAndConsComponent;
  let fixture: ComponentFixture<ProsAndConsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProsAndConsComponent]
    });
    fixture = TestBed.createComponent(ProsAndConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
