import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { VictoryPage } from './victory.page';

describe('VictoryPage', () => {
  let component: VictoryPage;
  let route: unknown;

  beforeEach(() => {
    route = { snapshot: { queryParamMap: convertToParamMap({}) } };
    component = new VictoryPage(route as ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
