import { ClimbingArea } from './climbing-area-interface';
import { RouteLevel } from './route-level-enum';

export interface Route {
  level: RouteLevel;
  name: string;
  climbingArea: ClimbingArea;
}
