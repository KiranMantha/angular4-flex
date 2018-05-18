import { Injectable, ComponentRef } from "@angular/core";
import { Message } from "./message";
import { NotificationsComponent } from './notification-container.component';
import { DomService } from './domService';
import { Notify } from "./notification.component";

@Injectable()
export class NotificationService {
    private _notificationContainerRef: ComponentRef<NotificationsComponent>;
    private _notificationContainerElement: HTMLElement;
    private _notifyRefs: ComponentRef<Notify>[] = [];

    constructor(
        private _domService: DomService
    ) {
        this._init();
    }

    private _init() {
        this._notificationContainerRef = this._domService.createComponentRef(NotificationsComponent);
        this._notificationContainerElement = this._domService.getDomElement(this._notificationContainerRef);
    }

    private _addMessage(message: Message) {
        if(this._notifyRefs.length === 0) {
            this._domService.appendTo(this._notificationContainerElement, 'content');
        }
        const notifyRef = this._domService.createComponentRef(Notify);
        notifyRef.instance.message = message;
        notifyRef.instance.onDismiss.subscribe(e => {
            let i = this._notifyRefs.indexOf(notifyRef);
            this._notifyRefs.splice(i, 1);
            this._domService.destroyRef(notifyRef);
            if(this._notifyRefs.length === 0) {
                this.resetNotifications();
            }
        });
        const notifyElement = this._domService.getDomElement(notifyRef);
        this._domService.appendTo(notifyElement, this._notificationContainerElement);
        notifyRef.changeDetectorRef.markForCheck();
        notifyRef.changeDetectorRef.detectChanges();
        this._notifyRefs.push(notifyRef);
    }

    sendMessage(content: string, type: string) {
        const message = new Message(content, type);
        this._addMessage(message);
    }

    resetNotifications() {
        this._notifyRefs.forEach((notifyRef) => {
            this._domService.destroyRef(notifyRef);
        });
        this._domService.destroyRef(this._notificationContainerRef);
    }
}