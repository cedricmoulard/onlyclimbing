import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  CLIMBING_AREAS_FEATURE_KEY,
  reducer
} from './+state/climbing-areas.reducer';
import { ClimbingAreasEffects } from './+state/climbing-areas.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CLIMBING_AREAS_FEATURE_KEY, reducer),
    EffectsModule.forFeature([ClimbingAreasEffects])
  ]
})
export class ClimbingAreasStateModule {}
