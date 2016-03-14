import {Page, NavController, NavParams} from 'ionic-angular';
import {HeroPage} from '../hero/hero';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  constructor(private nav: NavController, private navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;
  }

  goToNextPage() {
    () => console.log('want to go to hero !')
    this.nav.push(HeroPage);
  }
}
