import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { Router } from '@angular/router';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpUtil: HttpService, private router: Router ) { }
  public getHeader() {
    const token = localStorage.getItem('token');
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token
      })
    };
    return httpheaders;
}
  login(user) {
    return this.httpUtil.postService(environment.base_url + 'login', user);
  }

  register(user) {
   return this.httpUtil.postService(environment.base_url + 'registration', user);
  }

  forgotpassword(user) {
    return this.httpUtil.postService(environment.base_url + 'forgotpassword', user);
  }

  resetpassword(user, id) {
    return this.httpUtil.putService(environment.base_url + 'resetpassword/' + id, user, id);
  }
  public getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.httpUtil.getService(environment.base_url + '/get-user/' + token, {});
  }
  public getCollUser() {
    const token = localStorage.getItem('token');
    return this.httpUtil.getService(environment.base_url + '/get-all-user/' + token, {});
  }
  public getCollUserId(emailId) {
    const header = this.getHeader();
    return this.httpUtil.getService(environment.base_url + '/get-coll-user/' + emailId, header);
}
public getNoteOwner(ownerId) {
  const token = localStorage.getItem('token');
  return this.httpUtil.getService(environment.base_url + '/get-user-email/' + token, {
    params: {
      coUserId: ownerId
    }
  });
}
}

