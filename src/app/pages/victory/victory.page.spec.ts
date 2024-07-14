import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { MockService } from 'ng-mocks';
import { NewGameService } from '@/services/new-game/new-game.service';
import { VictoryPage } from './victory.page';

describe('VictoryPage', () => {
  let component: VictoryPage;
  let route: unknown;
  let newGameService: NewGameService;

  beforeEach(() => {
    route = { snapshot: { queryParamMap: convertToParamMap({}) } };
    newGameService = MockService(NewGameService);
    component = new VictoryPage(route as ActivatedRoute, newGameService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should replay', () => {
    jest.spyOn(newGameService, 'replay');

    component['replay']();

    expect(newGameService.replay).toHaveBeenCalled();
  });
});
