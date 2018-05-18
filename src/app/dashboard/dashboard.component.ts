import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../ui-controls/notifications/notification.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor(private alertService: NotificationService){}

    items:string[] = ['item1', 'item2', 'item3']
    selectedItem = (item) => {
        console.log(item);
    }

    sendNotification = () => {
        this.alertService.sendMessage('Hello World', 'danger');
    }

    ngOnInit(){
        this.alertService.sendMessage('Hello World', 'info');
    }
}