import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from './dish';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class DishService {

  private dishesUrl = './api/dishes.json'
  constructor(  private _http : HttpClient) {}

  private handleError (err : HttpErrorResponse) {
    let errorMsg = err.status
    console.log(errorMsg)
    return Observable.throw(' RECEIVED ERROR : ' + errorMsg)
  }

  getDishes () : Observable<Dish[]> {
    return this._http.get<Dish[]>(this.dishesUrl)
    .do(data => console.log(' - Dishes : ' + JSON.stringify(data)) )
    //.catch(this.handleError)         oppure con le LAMBDA FUNCTION o ARROW FUNCTION
    .catch ((err : HttpErrorResponse) => {
        let errorMsg = err.status
        console.log(errorMsg)
        return Observable.throw(' RECEIVED ERROR : ' + errorMsg)
        }
    )
  }

  getDish(id :number): Observable<Dish> {
    return this.getDishes()
    .map((dishes:Dish[]) => dishes[id])
  }

}
