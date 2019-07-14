import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CLIMBING_AREAS_FEATURE_KEY,
  ClimbingAreasState
} from './climbing-areas.reducer';

// Lookup the 'ClimbingAreas' feature state managed by NgRx
const getClimbingAreasState = createFeatureSelector<ClimbingAreasState>(
  CLIMBING_AREAS_FEATURE_KEY
);

const getLoaded = createSelector(
  getClimbingAreasState,
  (state: ClimbingAreasState) => state.loaded
);

const getAllClimbingAreas = createSelector(
  getClimbingAreasState,
  getLoaded,
  (state: ClimbingAreasState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getClimbingAreasState,
  (state: ClimbingAreasState) => state.selectedId
);
const getSelectedClimbingArea = createSelector(
  getAllClimbingAreas,
  getSelectedId,
  (climbingAreas, id) => {
    const result = climbingAreas.find(climbingArea => climbingArea.id === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const climbingAreasQuery = {
  getLoaded,
  getAllClimbingAreas,
  getSelectedClimbingArea
};
