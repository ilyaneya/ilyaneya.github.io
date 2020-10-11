import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interface/user.interface';

@Injectable()
export class UsersService{
  constructor(private http: HttpClient ) {
  }
  public getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>('https://emphasoft-test-assignment.herokuapp.com/api/v1/users/');
  }
}
