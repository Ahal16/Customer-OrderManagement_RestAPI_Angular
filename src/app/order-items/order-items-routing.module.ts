import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderItemsComponent } from './order-items.component';

const routes: Routes = [
  //orderItem-list
    {path : 'list', component: OrderItemsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderItemsRoutingModule { }
