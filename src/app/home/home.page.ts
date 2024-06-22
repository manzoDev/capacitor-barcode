import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { cartOutline, scanOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    this.addAllIcons();
  }

  addAllIcons() {
    addIcons({
      cartOutline,
      scanOutline
    })
  }
}
