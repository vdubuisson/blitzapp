import { Header } from '@/layout/header/header';
import { SelectOverlay } from '@/layout/select-overlay/select-overlay';
import { RouterOutlet } from '@angular/router';
import {
  byTestId,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/jest';
import { MockComponents, MockDirective } from 'ng-mocks';
import { AppComponent } from './app';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [
      ...MockComponents(Header, SelectOverlay),
      MockDirective(RouterOutlet),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render header component', () => {
    expect(byTestId('header')).toExist();
  });

  it('should render SelectOverlay component', () => {
    expect(byTestId('select-overlay')).toExist();
  });

  it('should have a router outlet', () => {
    expect(byTestId('router-outlet')).toExist();
  });
});
