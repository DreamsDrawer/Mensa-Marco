import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MenuListComponent } from './menu-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DishDetailComponent } from './dish-detail.component';
import { DishDetailGuard } from './dish-detail.guard';
import { DishService } from './dish.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MenuListComponent,
    DishDetailComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'menu', component: MenuListComponent },
      { path: 'menu/:id', component: DishDetailComponent, canActivate: [DishDetailGuard] }    // id PARAMETRO DEL ROUTING
    ]),
    SharedModule,
  ],

  providers: [DishService, DishDetailGuard]  //LISTA DEI SERVIZI

})
export class MenuModule { }
