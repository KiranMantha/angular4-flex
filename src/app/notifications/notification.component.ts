import { Component, OnInit } from "@angular/core";
import { Message } from "./message";
import { NotificationService } from "./notification.service";
import { NavigationStart, Router } from "@angular/router";

@Component({
    selector: 'notifications',
    template: `
        <div class="notifications_wrapper">
            <div *ngFor="let message of messages | reverseMessages" class="notification"            
                [ngClass]="{'is-info':     message.type == 'info',
                            'is-danger':   message.type == 'danger'
                            }">
        
                <button class="dismiss" (click)="dismissMessage(message)"><i class="fas fa-times"></i></button>
                {{message.content}}
            </div>
        </div>
    `,
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    messages: Message[] = [];
    constructor(
        private _notificationService: NotificationService,
        private router: Router
    ){}

    dismissMessage(message: Message){
        this.messages = this.messages.filter(x => x!== message);
    }

    ngOnInit(){
        this._notificationService.getMessages().subscribe(message => {
            this.messages.push(message);
        });

        this.router.events.forEach(event => {
            if(event instanceof NavigationStart) {
                this.messages = [];
            }
        });
    }
}