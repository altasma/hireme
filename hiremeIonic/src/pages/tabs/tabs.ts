import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
<<<<<<< HEAD
=======
import {SkillsPage}from '../skillList/skillList';
>>>>>>> hiremeBranch
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
<<<<<<< HEAD
  tab2Root: any = AboutPage;
=======
  tab2Root: any = SkillsPage;
>>>>>>> hiremeBranch
  tab3Root: any = ContactPage;

  constructor() {

  }
}
