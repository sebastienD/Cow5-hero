import {Page, NavController, NavParams} from 'ionic-angular';
import {ServerPage} from '../server/server';

@Page({
  templateUrl: 'build/pages/hero/hero.html'
})
export class HeroPage {

  constructor(private nav: NavController, private navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;
  }

  select(event: any, hero: string) {
    () => console.log('want to go to server !')
    this.nav.push(ServerPage);
  }

}
