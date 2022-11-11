import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;

  beforeEach(async () => {
    component = new PlayerComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on remove', () => {
    jest.spyOn(component.remove, 'emit');
    component.onRemove();
    expect(component.remove.emit).toBeCalled();
  });
});
