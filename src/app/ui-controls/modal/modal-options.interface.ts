import { TemplateRef } from "@angular/core";

export default interface IModalOptions { 
    modalTitle: string, 
    bodyTemplate: TemplateRef<any>,
    appendTo: string 
}