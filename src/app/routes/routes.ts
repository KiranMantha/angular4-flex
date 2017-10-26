import { Routes, CanActivate } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { OrdersComponent } from '../orders/orders.component';
import { ErrorRouteComponent } from '../errorRoute/errorRoute.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, data: { roles: ['ADMIN'] } },
    { path: 'orders', component: OrdersComponent, data: { roles: ['ADMIN', ''] } },
    { path: '**', component: ErrorRouteComponent }
]