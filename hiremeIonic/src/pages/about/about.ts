import { Component } from '@angular/core';
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
 
    let review = {
      title: this.title,
      description: this.description,
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

  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
}