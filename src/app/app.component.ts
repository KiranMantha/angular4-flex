import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { NotificationService } from './ui-controls/notifications/notification.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {

  }

  public isLoggedIn(): boolean {
    return this.auth.isAuthenticated();
  }

  ngOnInit(){
    this.router.events.forEach(event => {
      if (event instanceof NavigationStart) {
          //this.notificationService.resetNotifications();
      }
  });
  }

}
