import { Component } from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
    selector: 'content',
    templateUrl: './content.component.html'
})
export class ContentComponent {
    constructor(private app:AppComponent){

    }

}