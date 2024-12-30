import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderEditComponent } from './order-edit/order-edit.component';

const routes: Routes = [
  //SETTING-UP CHILDREN ROUTES
  //order-list
  {path : 'list', component: OrderListComponent},

  //order-add
  {path : 'add', component: OrderAddComponent},

  //order-edit
  {path : 'edit', component: OrderEditComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
