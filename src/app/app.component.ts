import {Component, OnInit} from '@angular/core';
import {LoaderService} from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  public title = 'untitled';
 public isLoading: boolean;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.loaderService.isLoading$.subscribe(value => {
    this.isLoading = value;
    });
  }
}
