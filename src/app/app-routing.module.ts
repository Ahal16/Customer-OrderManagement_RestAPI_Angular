import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { OrderItemsComponent } from './order-items/order-items.component';

const routes: Routes = [
  //SETTING-UP PARENT ROUTES
    //order-component
    //Lazy-loading
    {path : 'orders', component: OrdersComponent,
      loadChildren: () => import ('./orders/orders.module')
      .then(o => o.OrdersModule)
    },
    //Customer component
    {path : 'customers', component: CustomersComponent,
      loadChildren: () => import ('./customers/customers.module')
      .then(c => c.CustomersModule)
    },
     //orderitem component
    {path : 'orderitems', component: OrderItemsComponent,
      loadChildren: () => import ('./order-items/order-items.module')
      .then(oi => oi.OrderItemsModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
