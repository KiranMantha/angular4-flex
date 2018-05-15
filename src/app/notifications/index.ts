import { NgModule, ModuleWithProviders } from "@angular/core";
import { NotificationComponent } from "./notification.component";
import { ReverseMessagesPipe } from "./reverseMessages.pipe";
import { NotificationService } from "./notification.service";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NotificationComponent,
        ReverseMessagesPipe
    ],
    exports: [
        NotificationComponent
    ],
    providers: [
        NotificationService
    ]
})
export class NotificationsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NotificationsModule,
            providers: [ NotificationService ]
        }
    }
}