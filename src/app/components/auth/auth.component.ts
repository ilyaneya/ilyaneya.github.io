import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
public form: FormGroup;
public errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.value.username !== '' || this.form.value.password !== '') {
      this.authService.authorization(this.form.value)
        .pipe(catchError(error => {
          if (Object.keys(error.error)[0] !== 'non_field_errors') {
            this.errorMessage = Object.keys(error.error)[0] + ': ' + error.error[Object.keys(error.error)[0]][0];
          } else {
            this.errorMessage = error.error[Object.keys(error.error)[0]][0];
          }
          return throwError(error);
        }))
        .subscribe((response) => {
          this.errorMessage = undefined;
          localStorage.setItem('token', response.token);
          this.router.navigateByUrl('/users');
        });
    } else {
      this.errorMessage = 'Please, fill login form';
    }
  }
}
