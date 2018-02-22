import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../_models/index';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      //'Authorization': 'my-auth-token'
    })
  };
const myURL = 'http://127.0.0.1:1337';
@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(myURL +'/getAll');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        console.dir(user);  // ok
        //let queryString: string = "firstName="+ user.firstName +"&lastName="+ user.lastName+"&username="+ user.username+"&password="+user.password;
        return this.http.post(myURL +'/addUser', user, httpOptions);
        //return this.http.post('http://127.0.0.1:1337/addUser?'+ queryString, user );
        //return this.http.post('http://127.0.0.1:1337/addUser?'+ queryString, user ).subscribe((data) => {});
        
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}