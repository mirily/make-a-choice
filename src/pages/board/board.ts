import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-board',
  templateUrl: 'board.html',
})
export class BoardPage {

  constructor(public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoardPage');
  }

  addBoard() {
    console.log('test')
    const prompt = this.alertCtrl.create({
      title: 'Идея',
      message: "Введите идею для размышления",
      inputs: [
        {
          name: 'title',
          placeholder: 'Название'
        },
      ],
      buttons: [
        {
          text: 'Закрыть',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Сохранить',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


}
