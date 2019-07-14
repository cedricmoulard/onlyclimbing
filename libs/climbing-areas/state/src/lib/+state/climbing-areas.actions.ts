import { createAction, props, union } from '@ngrx/store';
import { ClimbingArea } from '@oc/climbing-areas/interface';

const loadClimbingAreas = createAction('[ClimbingAreas] Load ClimbingAreas');

const climbingAreasLoaded = createAction(
  '[ClimbingAreas] ClimbingAreas Loaded',
  props<{ climbingAreas: ClimbingArea[] }>()
);

export const ClimbingAreasActions = {
  loadClimbingAreas,
  climbingAreasLoaded
};

const unions = union(ClimbingAreasActions);

export type ClimbingAreasActionUnion = typeof unions;
