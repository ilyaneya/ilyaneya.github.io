import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class LoaderService{

  // tslint:disable-next-line:variable-name
  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoading$(): Observable<boolean>{
    return this._isLoading$.asObservable();
  }

  get isLoading(): boolean{
    return  this._isLoading$.getValue();
  }

 public setLoadingStatus(isLoading: boolean): void {
 // if (!isLoading){
 //   setTimeout(() => this._isLoading$.next(isLoading), 1000);
 //  }else {
     this._isLoading$.next(isLoading);
   }
 // }

  constructor(){}

}
