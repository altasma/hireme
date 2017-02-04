import { Component } from '@angular/core';
<<<<<<< HEAD

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
=======
import { ViewController } from 'ionic-angular';
 
@Component({
  selector: 'about',
  templateUrl: 'about.html'
})
export class AboutPage {
 
  title: any;
  description: any;
  rating: any;
 
  constructor(public viewCtrl: ViewController) {
 
  }
 
  save(): void {
    console.log("starting the about save()");
>>>>>>> hiremeBranch
 
    let review = {
      title: this.title,
      description: this.description,
<<<<<<< HEAD
       
      rating: this.rating,
      skill: this.skill
    };
 
    this.viewCtrl.dismiss(review);
 
=======
      rating: this.rating
    };

    //check if title is not empty
   if(review){
     if(review.title == null || review.title == {}){
       return;
     }
    this.viewCtrl.dismiss(review);
   }
   else{
     return;
   }

   console.log("ending the about save()");

>>>>>>> hiremeBranch
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
<<<<<<< HEAD

}
=======
}
>>>>>>> hiremeBranch
