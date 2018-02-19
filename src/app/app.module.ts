import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './routes/authGaurd';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { ErrorModule } from './errorRoute';
import { LoginModule } from './login';
import { HeaderModule } from './header';
import { SidebarModule } from './sidebar-nav';
import { DashboardModule } from './dashboard';
import { OrdersModule } from './orders';
import { routes } from './routes/routes';
import { AppComponent } from './app.component';


import { AuthenticationService } from './sharedServices/AuthenticationService';
import { UIModule } from './ui-controls';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    UIModule,
    ErrorModule,
    LoginModule,
    HeaderModule,
    SidebarModule,
    DashboardModule,
    OrdersModule
  ],
  providers: [
    AuthenticationService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
