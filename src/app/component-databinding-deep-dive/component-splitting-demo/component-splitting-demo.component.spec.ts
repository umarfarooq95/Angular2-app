import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSplittingDemoComponent } from './component-splitting-demo.component';

describe('ComponentSplittingDemoComponent', () => {
  let component: ComponentSplittingDemoComponent;
  let fixture: ComponentFixture<ComponentSplittingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSplittingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSplittingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
