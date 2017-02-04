import { Component } from "@angular/core";
import { NavController, ModalController,AlertController, ToastController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Reviews } from '../../providers/reviews';
import { SkilledPersons} from '../../providers/skilledPersons';

@Component({
  selector: 'skilled-persons-page',
  templateUrl: 'skilledPersons.html'
})
export class SkilledPersonsPage {
 
  skilledPersons: any;
 
  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController , public nav: NavController, public skilledPersonsService: SkilledPersons, public modalCtrl: ModalController) {
 
  }
 
  ionViewDidLoad(){
 
    this.skilledPersonsService.getSkilledPersons().then((data) => {
      console.log(data);
      this.skilledPersons = data;
    });
 
  }
 
 //This will display all the names with the selected skills
 //ordered by their ratings decreasing order
  getSkilledPersons(person){
        console.log("starting the getSkilledPersons() in skillList");


     let toast = this.toastCtrl.create({
      message: 'Listing available persons who can do' + person.name + '...',
      duration: 3000
        });
      toast.present();
       }      

 
}
