import { Injectable } from "@angular/core";
import { NotificationsModule } from ".";
import { Message } from "./message";
import { Subject, Observable } from "rxjs";

@Injectable()
export class NotificationService {
    private subject = new Subject<Message>();

    getMessages():Observable<Message> {
        return this.subject.asObservable();
    }

    sendMessage(content: string, type: string) {
        const message = new Message(content, type);
        this.subject.next(message);
    }
}