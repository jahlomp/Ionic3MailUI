import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  messages = [
    {
      name: "Adam Bradley",
      image: "adam-bradley.jpg",
      subject:"This town ain't big enough for the two of us!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error, ut distinctio maxime non hic adipisci suscipit inventore dignissimos ad, harum, vero ullam odio ab nulla culpa enim sit rem!",
      date_recieved: new Date("2017-05-09")
    },
    {
      name: "Ben Sperry",
      image: "ben-sperry.jpg",
      subject:"This town ain't big enough for the two of us!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error, ut distinctio maxime non hic adipisci suscipit inventore dignissimos ad, harum, vero ullam odio ab nulla culpa enim sit rem!",
      date_recieved: new Date("2017-06-10")
    },
    {
      name: "Justin Willis",
      image: "justin-willis.jpg",
      subject:"This town ain't big enough for the two of us!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error, ut distinctio maxime non hic adipisci suscipit inventore dignissimos ad, harum, vero ullam odio ab nulla culpa enim sit rem!",
      date_recieved: new Date("2017-07-03")
    },
    {
      name: "Adam Bradley",
      image: "adam-bradley.jpg",
      subject:"This town ain't big enough for the two of us!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error, ut distinctio maxime non hic adipisci suscipit inventore dignissimos ad, harum, vero ullam odio ab nulla culpa enim sit rem!",
      date_recieved: new Date()
    },
    {
      name: "Adam Bradley",
      image: "adam-bradley.jpg",
      subject:"This town ain't big enough for the two of us!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error, ut distinctio maxime non hic adipisci suscipit inventore dignissimos ad, harum, vero ullam odio ab nulla culpa enim sit rem!",
      date_recieved: new Date("2017-05-09")
    },
    {
      name: "Adam Bradley",
      image: "adam-bradley.jpg",
      subject:"This town ain't big enough for the two of us!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error, ut distinctio maxime non hic adipisci suscipit inventore dignissimos ad, harum, vero ullam odio ab nulla culpa enim sit rem!",
      date_recieved: new Date("2017-05-09")
    },
    {
      name: "Adam Bradley",
      image: "adam-bradley.jpg",
      subject:"This town ain't big enough for the two of us!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error, ut distinctio maxime non hic adipisci suscipit inventore dignissimos ad, harum, vero ullam odio ab nulla culpa enim sit rem!",
      date_recieved: new Date("2017-05-09")
    },
    {
      name: "Adam Bradley",
      image: "adam-bradley.jpg",
      subject:"This town ain't big enough for the two of us!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error, ut distinctio maxime non hic adipisci suscipit inventore dignissimos ad, harum, vero ullam odio ab nulla culpa enim sit rem!",
      date_recieved: new Date("2017-05-09")
    },
    {
      name: "Adam Bradley",
      image: "adam-bradley.jpg",
      subject:"This town ain't big enough for the two of us!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error, ut distinctio maxime non hic adipisci suscipit inventore dignissimos ad, harum, vero ullam odio ab nulla culpa enim sit rem!",
      date_recieved: new Date("2017-05-09")
    },
    {
      name: "Adam Bradley",
      image: "adam-bradley.jpg",
      subject:"This town ain't big enough for the two of us!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error, ut distinctio maxime non hic adipisci suscipit inventore dignissimos ad, harum, vero ullam odio ab nulla culpa enim sit rem!",
      date_recieved: new Date("2017-05-09")
    }
  ]
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

  readMessage(message) {
    this.navCtrl.push("MessagePage", { message: message })
  }

  composeMessage(){
    this.modalCtrl.create("ComposeMailPage").present();
  }
}
