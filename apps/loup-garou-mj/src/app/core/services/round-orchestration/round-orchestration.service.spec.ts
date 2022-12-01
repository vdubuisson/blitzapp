import { when } from 'jest-when';
import { MockService } from 'ng-mocks';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../../round-handlers/round-handler.interface';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';

import { RoundOrchestrationService } from './round-orchestration.service';

class MockRoundHandler implements RoundHandler {
  isOnlyOnce = false;
  handleAction(players: Player[], selectedPlayerIds: number[]): Player[] {
    throw new Error('Method not implemented.');
  }
  getRoundConfig(players: Player[]): Round {
    throw new Error('Method not implemented.');
  }
}

describe('RoundOrchestrationService', () => {
  let service: RoundOrchestrationService;
  let roundHandlersService: RoundHandlersService;

  beforeEach(() => {
    roundHandlersService = MockService(RoundHandlersService);
    service = new RoundOrchestrationService(roundHandlersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should reset unique rounds passed', () => {
    service['uniqueRoundsPassed'] = new Set([RoundEnum.CUPIDON]);

    service.resetRounds();

    expect(service['uniqueRoundsPassed'].size).toEqual(0);
  });

  it('should return next available round', () => {
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.LOUP_GAROU)
      .mockReturnValue(new MockRoundHandler());

    const nextRound = service.getNextRound(RoundEnum.VOYANTE);

    expect(nextRound).toEqual(RoundEnum.LOUP_GAROU);
  });

  it('should return next available round when end of rounds', () => {
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.VOYANTE)
      .mockReturnValue(new MockRoundHandler());

    const nextRound = service.getNextRound(RoundEnum.VILLAGEOIS);

    expect(nextRound).toEqual(RoundEnum.VOYANTE);
  });

  it('should add current round to unique list if onlyOnce', () => {
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    const mockCupidonHandler = new MockRoundHandler();
    mockCupidonHandler.isOnlyOnce = true;

    when(getHandlerSpy)
      .calledWith(RoundEnum.VOYANTE)
      .mockReturnValue(new MockRoundHandler());
    when(getHandlerSpy)
      .calledWith(RoundEnum.CUPIDON)
      .mockReturnValue(mockCupidonHandler);

    service.getNextRound(RoundEnum.CUPIDON);

    expect(service['uniqueRoundsPassed'].has(RoundEnum.CUPIDON)).toEqual(true);
  });

  it('should not add current round to unique list if not onlyOnce', () => {
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    const mockVoyanteHandler = new MockRoundHandler();
    mockVoyanteHandler.isOnlyOnce = true;

    when(getHandlerSpy)
      .calledWith(RoundEnum.AMOUREUX)
      .mockReturnValue(new MockRoundHandler());
    when(getHandlerSpy)
      .calledWith(RoundEnum.CUPIDON)
      .mockReturnValue(mockVoyanteHandler);

    service.getNextRound(RoundEnum.VOYANTE);

    expect(service['uniqueRoundsPassed'].has(RoundEnum.VOYANTE)).toEqual(false);
  });

  it('should not return unique round if already passed', () => {
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    const mockCupidonHandler = new MockRoundHandler();
    mockCupidonHandler.isOnlyOnce = true;

    when(getHandlerSpy)
      .calledWith(RoundEnum.VOYANTE)
      .mockReturnValue(new MockRoundHandler());
    when(getHandlerSpy)
      .calledWith(RoundEnum.VOLEUR)
      .mockReturnValue(new MockRoundHandler());
    when(getHandlerSpy)
      .calledWith(RoundEnum.CUPIDON)
      .mockReturnValue(mockCupidonHandler);

    service['uniqueRoundsPassed'] = new Set([RoundEnum.CUPIDON]);

    const nextRound = service.getNextRound(RoundEnum.VOLEUR);

    expect(nextRound).toEqual(RoundEnum.VOYANTE);
  });

  it('should return first round with handler', () => {
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.VOYANTE)
      .mockReturnValue(new MockRoundHandler());

    const firstRound = service.getFirstRound();

    expect(firstRound).toEqual(RoundEnum.VOYANTE);
  });
});
