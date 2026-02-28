import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';
import { NewPlayer } from './new-player';

describe('NewPlayer', () => {
  let spectator: Spectator<NewPlayer>;
  const createComponent = createComponentFactory({
    component: NewPlayer,
    imports: [MockComponent(FaIconComponent)],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should emit name on submit', () => {
    const component = spectator.component;

    vi.spyOn(component['playerForm'], 'reset').mockImplementation(() => {});
    vi.spyOn(component.newPlayer, 'emit').mockImplementation((val) => val);

    component['playerForm'].setValue({ name: 'Name' });
    component['onSubmit']();

    expect(component.newPlayer.emit).toHaveBeenCalledWith('Name');
    expect(component['playerForm'].reset).toHaveBeenCalled();
  });
});
