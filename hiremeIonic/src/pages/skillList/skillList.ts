import { Component } from "@angular/core";
import { NavController, ModalController,AlertController, ToastController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Reviews } from '../../providers/reviews';
import { Skills } from '../../providers/skills';

@Component({
  selector: 'skills-page',
  templateUrl: 'skillList.html'
})
export class SkillsPage {
 
  skills: any;
 
  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController , public nav: NavController, public skillService: Skills, public modalCtrl: ModalController) {
 
  }
 
  ionViewDidLoad(){
 
    this.skillService.getSkills().then((data) => {
      console.log(data);
      this.skills = data;
    });
 
  }
 
 //This will display all the names with the selected skills
 //ordered by their ratings decreasing order
  getSkilledPersons(skill){
        console.log("starting the getSkilledPersons() in skillList");


     let toast = this.toastCtrl.create({
      message: 'Listing available persons who can do' + skill.name + '...',
      duration: 3000
        });
      toast.present();
       }      

  
}
