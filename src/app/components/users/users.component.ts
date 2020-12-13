import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {IUser} from '../../interface/user.interface';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: IUser[];
  private allUsers: IUser[];
  public sorting: 'up' | 'down' = 'up';
  public searchForm: FormGroup;
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private loaderService: LoaderService) {
    this.searchForm = new FormGroup({
      query: new FormControl('')
      }
    );
  }

  ngOnInit(): void {
    this.loaderService.setLoadingStatus(true);
    this.usersService.getUsers().subscribe((response) => {
      this.users = response;
      this.sort();
      this.loaderService.setLoadingStatus(false);
    });
  }

  public onLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

  public sort(): void {
    if ( this.sorting === 'up') {
      this.users = this.users.sort((a, b) => b.id - a.id);
      this.sorting = 'down';
    } else {
      this.users = this.users.sort((a, b) => a.id - b.id);
      this.sorting = 'up';
    }
    this.allUsers = this.users;
  }

  public filter(event): void {
    if (event.target.value.trim() === '') {
      this.users = this.allUsers;
    }
    this.users = this.allUsers.filter(user => user.username.includes(event.target.value));
  }
}
