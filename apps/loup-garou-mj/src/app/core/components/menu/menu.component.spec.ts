import { NavigationEnd, Router } from '@angular/router';
import { IonMenu } from '@ionic/angular';
import { MockService } from 'ng-mocks';
import { Subject } from 'rxjs';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let router: Router;
  let routerEvents$: Subject<NavigationEnd>;

  beforeEach(() => {
    router = MockService(Router);
    routerEvents$ = new Subject();
    jest.spyOn(router, 'events', 'get').mockReturnValue(routerEvents$);
    component = new MenuComponent(router);
  });

  it('should close menu on NavigationEnd', () => {
    const menu = MockService(IonMenu);
    jest.spyOn(menu, 'close');
    component['menu'] = menu;

    component.ngAfterViewInit();
    routerEvents$.next(new NavigationEnd(0, '', ''));

    expect(menu.close).toBeCalled();
  });
});
