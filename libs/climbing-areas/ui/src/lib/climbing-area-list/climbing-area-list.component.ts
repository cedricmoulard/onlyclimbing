import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClimbingArea } from '@oc/climbing-areas/interface';

@Component({
  selector: 'oc-climbing-area-list',
  template: `
    <ul>
      <li
        *ngFor="let climbingArea of climbingAreas"
        (click)="selected.emit(climbingArea)"
        [id]="climbingArea.id"
      >
        {{ climbingArea.name }}
      </li>
    </ul>
  `,
  styles: []
})
export class ClimbingAreaListComponent {
  @Input() climbingAreas: ClimbingArea[];
  @Output() selected: EventEmitter<ClimbingArea>;

  constructor() {
    this.selected = new EventEmitter<ClimbingArea>();
  }
}
