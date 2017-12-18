import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-compose-mail',
  templateUrl: 'compose-mail.html',
})
export class ComposeMailPage {
  public options: Object = {
    toolbarBottom: true,
  }
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  }

  sendMessage() {
    this.navCtrl.setRoot("InboxPage");
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
