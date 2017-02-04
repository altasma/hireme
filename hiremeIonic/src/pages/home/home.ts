<<<<<<< HEAD
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
=======
import { Component } from "@angular/core";
import { NavController, ModalController,AlertController, ToastController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Reviews } from '../../providers/reviews';
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  reviews: any;
 
  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController , public nav: NavController, public reviewService: Reviews, public modalCtrl: ModalController) {
 
  }
 
>>>>>>> hiremeBranch
  ionViewDidLoad(){
 
    this.reviewService.getReviews().then((data) => {
      console.log(data);
      this.reviews = data;
    });
 
  }
 
  addReview(){
<<<<<<< HEAD
=======
        console.log("starting the addReview() in home");

>>>>>>> hiremeBranch
 
    let modal = this.modalCtrl.create(AboutPage);
 
    modal.onDidDismiss(review => {
<<<<<<< HEAD
      if(review){
        this.reviews.push(review);
        this.reviewService.createReview(review);        
      }
    });
 
    modal.present();
 
  }
 
  deleteReview(review){
 
    //Remove locally
=======
      console.log("review=", review);
      if(review){
        console.log("this=", this.reviews);
        this.reviews.push(review);
        this.reviewService.createReview(review);  

      //Show toast for successfully adding review
     let toast = this.toastCtrl.create({
      message: 'Review was added successfully',
      duration: 3000
        });
      toast.present();
       }      

    });
 
    modal.present();
   console.log("ending the addReview() in home");

 
  }

//   presentConfirm() {
//     let cancelled = true;
//   let alert = this.alertCtrl.create({
//     title: 'Confirm Delete',
//     message: 'Do you want to delete this review?',
//     buttons: [
//       {
//         text: 'Cancel',
//         role: 'cancel',
//         handler: () => {
//            cancelled = true;
//           console.log('Cancel clicked');
//         }
//       },
//       {
//         text: 'Buy',
//         handler: () => {
//           cancelled =false;
//           console.log('Buy clicked');
//         }
//       }
//     ]
//   });
//   alert.present();
// }
 
  deleteReview(review){
  //this.presentConfirm();

  //Create alert before delete
   let alert = this.alertCtrl.create({
    title: 'Confirm Delete',
    message: 'Do you want to delete this review?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Delete',
        handler: () => {
          //Remove locally
>>>>>>> hiremeBranch
      let index = this.reviews.indexOf(review);
 
      if(index > -1){
        this.reviews.splice(index, 1);
      }   
 
    //Remove from database
    this.reviewService.deleteReview(review._id);
<<<<<<< HEAD
  }
 

}
=======
          console.log('delete clicked');

    //Show toast for successfully deleting a review
     let toast = this.toastCtrl.create({
      message: 'Review was deleted successfully',
      duration: 3000
        });
      toast.present();


        }
      }
    ]
  });
  alert.present(); 
    // //Remove locally
    //   let index = this.reviews.indexOf(review);
 
    //   if(index > -1){
    //     this.reviews.splice(index, 1);
    //   }   
 
    // //Remove from database
    // this.reviewService.deleteReview(review._id);
  }
 
}
>>>>>>> hiremeBranch
