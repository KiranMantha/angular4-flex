import { NgModule, ModuleWithProviders } from "@angular/core";
import { Notify } from "./notification.component";
import { NotificationsComponent } from './notification-container.component';
import { NotificationService } from "./notification.service";
import { CommonModule } from "@angular/common";
import { DomService } from "./domService";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Notify,
        NotificationsComponent
    ],
    exports: [
        Notify,
        NotificationsComponent
    ],
    entryComponents: [
        Notify,
        NotificationsComponent
    ],
    providers: [
        NotificationService,
        DomService
    ]
})
export class NotificationsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NotificationsModule,
            providers: [ NotificationService, DomService ]
        }
    }
}