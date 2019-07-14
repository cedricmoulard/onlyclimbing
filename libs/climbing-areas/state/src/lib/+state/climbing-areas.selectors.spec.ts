import { CLIMBING_AREAS_FEATURE_KEY, ClimbingAreasPartialState } from './climbing-areas.reducer';
import { climbingAreasQuery } from './climbing-areas.selectors';
import { ClimbingArea } from '@oc/climbing-areas/interface';

describe('ClimbingAreas Selectors', () => {
  const getClimbingAreasId = it => it['id'];

  let storeState: ClimbingAreasPartialState;

  beforeEach(() => {
    const createClimbingAreas = (id: string, name: string): ClimbingArea => ({
      id,
      name
    });
    storeState = {
      climbingAreas: {
        list: [
          createClimbingAreas('1', 'Sector 1'),
          createClimbingAreas('2', 'Sector 2'),
          createClimbingAreas('3', 'Sector 3')
        ],
        selectedId: '2',
        loaded: true
      }
    };
  });

  test('getAllClimbingAreas() should return the list of ClimbingAreas', () => {
    const results = climbingAreasQuery.getAllClimbingAreas(storeState);
    const selId = getClimbingAreasId(results[1]);

    expect(results.length).toBe(3);
    expect(selId).toBe('2');
  });

  test('getAllClimbingAreas() should return an empty list', () => {
    const results = climbingAreasQuery.getAllClimbingAreas({
      climbingAreas: {
        ...storeState[CLIMBING_AREAS_FEATURE_KEY],
        loaded: false
      }
    } as ClimbingAreasPartialState);

    expect(results.length).toBe(0);
  });

  test('getSelectedClimbingArea() should return the selected Entity', () => {
    const result = climbingAreasQuery.getSelectedClimbingArea(storeState);
    const selId = getClimbingAreasId(result);

    expect(selId).toBe('2');
  });

  test('getSelectedClimbingArea() should return undefined', () => {
    const result = climbingAreasQuery.getSelectedClimbingArea({
      climbingAreas: {
        ...storeState[CLIMBING_AREAS_FEATURE_KEY],
        selectedId: 'toto'
      }

    } as ClimbingAreasPartialState);

    expect(result).toBe(undefined);
  });

  test('getLoaded() should return the current \'loaded\' status', () => {
    const result = climbingAreasQuery.getLoaded(storeState);

    expect(result).toBe(true);
  });

});
