import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';

/*
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {

	user: User
	login: string

  constructor(public navCtrl: NavController, private navParams: NavParams, private githubUsers: GithubUsers) {
  	// navParams allows us to access navCtrl.push's page arguments
  	// (in this case from pages/users/users.ts)
  	this.login = navParams.get('login');
  	// Since githubUsers.loadDetails is an observable,
  	// we can access the subscribe method here
  	githubUsers.loadDetails(this.login).subscribe(user => {
  		this.user = user;
  		//console.log(user)
  	})
  }

  ionViewDidLoad() {
    console.log('Hello UserDetails Page');
  }

}
