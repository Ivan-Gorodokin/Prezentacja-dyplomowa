import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDemoComponent } from './project-demo.component';

describe('DemoComponent', () => {
  let component: ProjectDemoComponent;
  let fixture: ComponentFixture<ProjectDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDemoComponent]
    });
    fixture = TestBed.createComponent(ProjectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
