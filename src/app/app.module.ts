import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ErrorModule,
    LoginModule,
    HeaderModule,
    SidebarModule,
    DashboardModule,
    OrdersModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
