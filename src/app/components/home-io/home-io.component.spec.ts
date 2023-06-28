import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIoComponent } from './home-io.component';

describe('HomeIoComponent', () => {
  let component: HomeIoComponent;
  let fixture: ComponentFixture<HomeIoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIoComponent]
    });
    fixture = TestBed.createComponent(HomeIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
