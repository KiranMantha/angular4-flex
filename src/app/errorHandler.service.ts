import { Injectable, ErrorHandler, Injector } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { NotificationService } from './ui-controls/notifications/notification.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(
    //private notificationService: NotificationService
  ) { }
  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      // Server or connection error happened
      if (!navigator.onLine) {
        // Handle offline error
        //return this.notificationService.sendMessage('No Internet Connection', 'danger');
      } else {
        // Handle Http Error (error.status === 403, 404...)
        //return this.notificationService.sendMessage(`${error.status} - ${error.message}`, 'danger');
      }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)     
    }
    // Log the error anyway
    console.error('It happens: ', error);
  }
}