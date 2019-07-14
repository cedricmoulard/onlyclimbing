import { async, TestBed } from '@angular/core/testing';
import { ClimbingAreasUiModule } from './climbing-areas-ui.module';

describe('ClimbingAreasUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClimbingAreasUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ClimbingAreasUiModule).toBeDefined();
  });
});
