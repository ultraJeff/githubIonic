import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { UserDetailsPage } from '../user-details/user-details';
import { GithubUsers } from '../../providers/github-users';

/*
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
	users: User[]
	originalUsers: User[]

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
  	//Load Github users
  	githubUsers
  		.load().subscribe(users => {
  			this.users = users
  			this.originalUsers = users
  		})

		// githubUsers
		// .searchUsers('scotch').subscribe(users => {
		// 	console.log(users)
		// })
  }

  goToDetails(login: string) {
  	//TODO: Try pushing entire user model interface to page
  	// { login } is es2015 property shorthand.
  	// In es5, this translate to { login: login }
  	this.navCtrl.push(UserDetailsPage, { login })
  }

  search(searchEvent) {
  	let term = searchEvent.target.value
  	//We will only perform the search if we have 3 or more characters
  	if (term.trim() === '' || term.trim().length < 3) {
  		//Load cached users
  		this.users = this.originalUsers
  	} else {
  		//Get the searched users from github
  		this.githubUsers.searchUsers(term).subscribe(users => {
  			this.users = users
  		})
  	}
  }

  ionViewDidLoad() {
    console.log('Hello Users Page')
  }

}
