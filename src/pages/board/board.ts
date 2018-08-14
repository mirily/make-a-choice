import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-board',
  templateUrl: 'board.html',
})
export class BoardPage {
  items = []

  constructor(public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoardPage');
  }

  addBoard() {
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
            if (data && data.title) {
              console.log(data)
            }
          }
        },
        {
          text: 'Сохранить',
          handler: data => {
            if (data && data.title) {
              this.items.push(data.title)
              console.log(this.items)
            }            
          }
        }
      ]
    });
    prompt.present();
  }


}
