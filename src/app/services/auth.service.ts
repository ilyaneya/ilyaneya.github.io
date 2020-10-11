import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAuth, IAuthResponse} from '../interface/auth.interface';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService{
  constructor(private http: HttpClient) {
  }
  public authorization(data: IAuth): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>('https://emphasoft-test-assignment.herokuapp.com/api-token-auth/', data);

  }
  public logout(): void {
    localStorage.removeItem('token');
  }
}
