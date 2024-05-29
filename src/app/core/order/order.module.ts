import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { OrderHeaderComponent } from './components/order-header/order-header.component';
import { OrderMainComponent } from './components/order-main/order-main.component';

@NgModule({
  declarations: [OrderComponent, OrderHeaderComponent, OrderMainComponent],
  imports: [CommonModule, OrderRoutingModule],
})
export class OrderModule {}
