import { Component, OnInit } from "@angular/core";
import { Dish } from "./dish";
import { DishService } from "./dish.service";

@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
})

export class MenuListComponent implements OnInit{
  errorMessage: any;
  dietMessage: string;

  constructor(private _dishService : DishService){}

  ngOnInit(): void {
    this._dishService.getDishes()
    .subscribe(
      dishes => this.dishes = dishes,
      error => this.errorMessage = <any>error
    )
  }
  panelHeading = 'Menù della giornata :';
  imageWidth = 100;
  dishes: Dish[];

  incCounter(d:Dish) {
    d.counter = +d.counter + 1;  // Il PIU davanti converte le stringhe in numeri
  }

  decCounter(d:Dish) {
    if (d.counter > 0) {
      d.counter = +d.counter - 1;
    }
  }

  doOrder(){
    let totale : number = 0;
    for (let dish of this.dishes) {
      if (dish.counter > 0) {
        console.log (`Hai ordinato ${dish.counter} porzioni di ${dish.name} `);
        totale = totale + (dish.price * dish.counter);
      }
    }
    console.log (`Hai speso ${totale}`);

  }

  reset() {
    this.dishes.forEach(x => x.counter = 0);
  }

  _totPrice:number = 0;
  get totPrice(): number {
    this._totPrice = 0;
    this.dishes.forEach(y => this._totPrice += (y.price * y.counter));
    return this._totPrice;
  }
  
  onNotifyDiet (mess : string) {
    this.dietMessage = mess;
  }
}
