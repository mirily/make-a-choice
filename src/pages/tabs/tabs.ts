import { Component } from '@angular/core';

import { BoardPage } from '../board/board';
import { TaskPage } from '../task/task';
import { StatisticsPage } from '../statistics/statistics';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BoardPage;
  tab2Root = TaskPage;
  tab3Root = StatisticsPage;

  constructor() {

  }
}
