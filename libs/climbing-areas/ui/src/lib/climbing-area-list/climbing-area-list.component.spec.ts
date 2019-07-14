import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbingAreaListComponent } from './climbing-area-list.component';
import { By } from '@angular/platform-browser';
import { ClimbingArea } from '@oc/climbing-areas/interface';

describe('ClimbingAreaListComponent', () => {
  let component: ClimbingAreaListComponent;
  let fixture: ComponentFixture<ClimbingAreaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClimbingAreaListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbingAreaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should display climbing areas', () => {
    component.climbingAreas = [
      { id: '1', name: 'Area 1' },
      { id: '2', name: 'Area 2' },
      { id: '3', name: 'Area 3' }
    ];
    fixture.detectChanges();

    const elements = fixture.debugElement.queryAll(By.css('li'));

    expect(elements.length).toBe(3);
  });

  test('should display climbing areas name', () => {
    component.climbingAreas = [{ id: '1', name: 'Area 1' }];
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('li'));
    expect(element.nativeElement).toMatchSnapshot();
  });

  test('should emit event on click', () => {
    const climbingArea: ClimbingArea = { id: '1', name: 'Area 1' };

    const emitMock = spyOn(component.selected, 'emit');

    component.climbingAreas = [climbingArea];
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('li'));
    element.triggerEventHandler('click', null);

    expect(emitMock).toBeCalledTimes(1);
    expect(emitMock).toBeCalledWith(climbingArea);
  });
});
