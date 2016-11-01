import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// Observable is necessary to return the results as a stream of data
// that we can subscribe to.
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

/*
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

// @Injectable decorator is how Angular 2 declares it's services/providers

@Injectable()
export class GithubUsers {

	githubApiUrl = 'https://api.github.com'

  constructor(public http: Http) {
    console.log('Hello GithubUsers Provider');
  }

  // Load all github users
  load(): Observable<User[]> {
  	return this.http.get(`${this.githubApiUrl}/users`)
  		.map(res => <User[]>res.json());
  }

  // Load specific github user by providing login(username)
  loadDetails(login: string): Observable<User> {
  	// Take in a string login as a parameter and return an Observable of User
  	// that we can subscribe to, to get the results of the request.
  	// Then we cast the response to the User model
  	// TODO: does the response HAVE to be named res?
  	return this.http.get(`${this.githubApiUrl}/users/${login}`)
  		.map(res => <User>res.json())
  }

  // Search for Github Users
  searchUsers(searchParam: string): Observable<User[]> {
  	return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`)
  		.map(res => <User[]>res.json().items)
  }

}
