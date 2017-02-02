import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Reviews } from '../../providers/reviews';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 reviews: any;
  constructor(public navCtrl: NavController,public nav: NavController, public reviewService: Reviews, public modalCtrl: ModalController) {

  }
  ionViewDidLoad(){
 
    this.reviewService.getReviews().then((data) => {
      console.log(data);
      this.reviews = data;
    });
 
  }
 
  addReview(){
 
    let modal = this.modalCtrl.create(AboutPage);
 
    modal.onDidDismiss(review => {
      if(review){
        this.reviews.push(review);
        this.reviewService.createReview(review);        
      }
    });
 
    modal.present();
 
  }
 
  deleteReview(review){
 
    //Remove locally
      let index = this.reviews.indexOf(review);
 
      if(index > -1){
        this.reviews.splice(index, 1);
      }   
 
    //Remove from database
    this.reviewService.deleteReview(review._id);
  }
 

}