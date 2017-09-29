import { Component, OnInit } from '@angular/core';
import { Dish } from './dish';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from './dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  
  errorMessage: any;
  dish: Dish
  
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _dishService : DishService) { 
    console.log(this._route.snapshot.paramMap.get('id'))
  }

  onBack() : void {
    this._router.navigate(['/menu'])
  }
  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id')
    this._dishService.getDish(id)
    .subscribe(
      dishes => this.dish = dishes,
      error => this.errorMessage = <any>error
    )

  }

}
