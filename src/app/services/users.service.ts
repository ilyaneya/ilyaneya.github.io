import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interface/user.interface';
import {LoaderService} from './loader.service';

@Injectable()
export class UsersService{
  constructor(private http: HttpClient, private loaderService: LoaderService) {
  }
  public getUsers(): Observable<IUser[]>{
    this.loaderService.setLoadingStatus(true);
    return this.http.get<IUser[]>('https://emphasoft-test-assignment.herokuapp.com/api/v1/users/');
    this.loaderService.setLoadingStatus(false);
  }
}
