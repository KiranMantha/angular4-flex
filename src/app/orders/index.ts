import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component'

@NgModule({
  declarations: [
    OrdersComponent
  ],
  exports: [
    OrdersComponent
  ]
})
export class OrdersModule { }
