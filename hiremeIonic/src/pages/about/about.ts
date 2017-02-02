import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  title: any;
  description: any;
  skill:any;
  rating: any;
  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {

  }
  save(): void {
 
    let review = {
      title: this.title,
      description: this.description,
       
      rating: this.rating,
      skill: this.skill
    };
 
    this.viewCtrl.dismiss(review);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }

}
