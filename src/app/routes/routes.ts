import { Routes, CanActivate } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { OrdersComponent } from '../orders/orders.component';
import { ErrorRouteComponent } from '../errorRoute/errorRoute.component';
import { AuthGuard } from './authGaurd';
import { ContentComponent } from '../content/content.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'app', component: ContentComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, outlet: 'appOutlet', canActivate:[AuthGuard] },
            { path: 'orders', component: OrdersComponent, outlet: 'appOutlet', canActivate:[AuthGuard], data: { roles: ['ADMIN', ''] } },
            { path: '**', component: ErrorRouteComponent, outlet: 'appOutlet', }
        ]
    },

    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent, outlet: 'login' },
    // { path: 'dashboard', component: DashboardComponent, outlet: 'app', canActivate:[AuthGuard], data: { roles: ['ADMIN'] } },
    // { path: 'orders', component: OrdersComponent, outlet: 'app', canActivate:[AuthGuard], data: { roles: ['ADMIN', ''] } },
    // { path: '**', component: ErrorRouteComponent, outlet: 'app', }
]
