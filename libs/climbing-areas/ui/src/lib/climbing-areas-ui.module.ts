import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClimbingAreaListComponent } from './climbing-area-list/climbing-area-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ClimbingAreaListComponent],
  exports: [ClimbingAreaListComponent]
})
export class ClimbingAreasUiModule {}
