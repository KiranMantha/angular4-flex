import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './routes/authGaurd';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './interceptor.service';

import { UIModule } from './ui-controls';
import { ErrorModule } from './errorRoute';
import { LoginModule } from './login';
import { HeaderModule } from './header';
import { SidebarModule } from './sidebar-nav';
import { DashboardModule } from './dashboard';
import { OrdersModule } from './orders';
import { routes } from './routes/routes';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
