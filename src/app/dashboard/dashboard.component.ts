import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    items:string[] = ['item1', 'item2', 'item3']
    selectedItem = (item) => {
        console.log(item);
    }
}