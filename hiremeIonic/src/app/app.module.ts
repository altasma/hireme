import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SkillsPage } from '../pages/skillList/skillList';
import { SkilledPersonsPage } from '../pages/skilledPersons/skilledPersons';
import { TabsPage } from '../pages/tabs/tabs';
import {Reviews} from '../providers/reviews';
import {Skills} from '../providers/skills';
import {SkilledPersons} from '../providers/skilledPersons';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SkillsPage,
    SkilledPersonsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SkillsPage,
    SkilledPersonsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Reviews, Skills, SkilledPersons]
})
export class AppModule {}
