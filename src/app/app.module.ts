import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BoardPageModule } from '../pages/board/board.module';
import { TaskPageModule } from '../pages/task/task.module';
import { StatisticsPageModule } from '../pages/statistics/statistics.module';
import { BoardProvider } from '../providers/board/board';
import { SqliteProvider } from '../providers/sqlite/sqlite';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BoardPageModule,
    TaskPageModule,
    StatisticsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BoardProvider,
    SqliteProvider
  ]
})
export class AppModule {}
