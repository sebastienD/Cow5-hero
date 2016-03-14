import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/server/server.html'
})
export class ServerPage {

    constructor(private nav: NavController, private navParams: NavParams) {
        this.nav = nav;
        this.navParams = navParams;
    }

}