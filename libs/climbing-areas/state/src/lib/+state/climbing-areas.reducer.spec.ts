import { ClimbingAreasActions } from './climbing-areas.actions';
import { ClimbingAreasState, reducer } from './climbing-areas.reducer';
import { ClimbingArea } from '@oc/climbing-areas/interface';

const initialState: ClimbingAreasState = {
  loaded: false,
  list: []
};

describe('ClimbingAreas Reducer', () => {
  const getClimbingAreasId = it => it['id'];
  let createClimbingAreas;

  beforeEach(() => {
    createClimbingAreas = (id: string, name: string): ClimbingArea => ({
      id,
      name
    });
  });

  describe('valid ClimbingAreas actions ', () => {
    test('should set the list of known ClimbingAreas', () => {
      const climbingAreas = [
        createClimbingAreas('1', 'AREA-1'),
        createClimbingAreas('2', 'AREA-2')
      ];
      const action = ClimbingAreasActions.climbingAreasLoaded({
        climbingAreas
      });
      const result: ClimbingAreasState = reducer(initialState, action);
      const selId: string = getClimbingAreasId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('2');
    });
  });

  describe('unknown action', () => {
    test('should return the initial state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
