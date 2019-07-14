import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot } from '@nrwl/angular/testing';

import { ClimbingAreasEffects } from './climbing-areas.effects';
import { ClimbingAreasActions } from './climbing-areas.actions';

describe('ClimbingAreasEffects', () => {
  let actions: Observable<any>;
  let effects: ClimbingAreasEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClimbingAreasEffects, provideMockActions(() => actions)]
    });

    effects = TestBed.get(ClimbingAreasEffects);
  });

  describe('loadClimbingAreas$', () => {
    test('should work', () => {
      actions = hot('-a-|', { a: ClimbingAreasActions.loadClimbingAreas() });
      expect(effects.loadClimbingAreas$).toBeObservable(
        hot('-a-|', {
          a: ClimbingAreasActions.climbingAreasLoaded({ climbingAreas: [] })
        })
      );
    });
  });
});
