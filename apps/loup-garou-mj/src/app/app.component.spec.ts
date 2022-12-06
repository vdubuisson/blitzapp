import { EnvironmentInjector } from '@angular/core';
import { MockService } from 'ng-mocks';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent(MockService(EnvironmentInjector));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
