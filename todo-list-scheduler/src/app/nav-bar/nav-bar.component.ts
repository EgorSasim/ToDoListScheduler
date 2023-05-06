import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CALENDAR_BLACK_SRC,
  CALENDAR_BLUE_SRC,
  MENU_SRC,
  PROFILE_BLACK_SRC,
  PROFILE_BLUE_SRC,
  TASKS_BLACK_SRC,
  TASKS_BLUE_SRC,
} from 'src/app/nav-bar/nav-bar.constants';
import { NavBarItems } from 'src/app/nav-bar/nav-bar.typings';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  public tasksSrc: string = TASKS_BLUE_SRC;
  public profileSrc: string = PROFILE_BLACK_SRC;
  public calendarSrc: string = CALENDAR_BLACK_SRC;
  public menuSrc: string = MENU_SRC;

  public navBarItems: typeof NavBarItems = NavBarItems;
  public selectedItem: NavBarItems = NavBarItems.Tasks;

  public changeSelectedNavBarItem(navBarItem: NavBarItems): void {
    this.setNavBarItemsToDefault();
    this.selectedItem = navBarItem;
    switch (navBarItem) {
      case NavBarItems.Tasks:
        this.tasksSrc = TASKS_BLUE_SRC;
        break;
      case NavBarItems.Calendar:
        this.calendarSrc = CALENDAR_BLUE_SRC;
        break;
      case NavBarItems.Me:
        this.profileSrc = PROFILE_BLUE_SRC;
        break;
    }
  }

  private setNavBarItemsToDefault(): void {
    this.tasksSrc = TASKS_BLACK_SRC;
    this.profileSrc = PROFILE_BLACK_SRC;
    this.calendarSrc = CALENDAR_BLACK_SRC;
  }
}
