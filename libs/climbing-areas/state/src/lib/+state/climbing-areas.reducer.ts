import { ClimbingAreasActions } from './climbing-areas.actions';
import { ClimbingArea } from '@oc/climbing-areas/interface';
import { Action, createReducer, on } from '@ngrx/store';

export const CLIMBING_AREAS_FEATURE_KEY = 'climbingAreas';

/**
 * Interface for the 'ClimbingAreas' data used in
 *  - ClimbingAreasState, and
 *  - climbingAreasReducer
 *
 *  Note: replace if already defined in another module
 */

export interface ClimbingAreasState {
  list: ClimbingArea[]; // list of ClimbingAreas; analogous to a sql normalized table
  selectedId?: string | number; // which ClimbingAreas record has been selected
  loaded: boolean; // has the ClimbingAreas list been loaded
}

export interface ClimbingAreasPartialState {
  readonly [CLIMBING_AREAS_FEATURE_KEY]: ClimbingAreasState;
}

const initialState: ClimbingAreasState = {
  list: [],
  loaded: false
};

const climbingAreasReducer = createReducer(
  initialState,
  on(ClimbingAreasActions.climbingAreasLoaded, (state, { climbingAreas }) => ({
    ...state,
    loaded: true,
    list: climbingAreas
  }))
);

export function reducer(state: ClimbingAreasState | undefined, action: Action) {
  return climbingAreasReducer(state, action);
}

{
}
