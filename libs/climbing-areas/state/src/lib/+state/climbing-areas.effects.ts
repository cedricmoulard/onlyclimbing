import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ClimbingAreasActions, ClimbingAreasActionUnion } from './climbing-areas.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class ClimbingAreasEffects {

  loadClimbingAreas$ = createEffect(() => this.actions$.pipe(
    ofType(ClimbingAreasActions.loadClimbingAreas.type),
    map((() => {
        return ClimbingAreasActions.climbingAreasLoaded({ climbingAreas: [] });
      })
    ))
  );

  constructor(
    private actions$: Actions<ClimbingAreasActionUnion>
  ) {
  }
}
