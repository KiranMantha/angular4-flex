import { 
    Injectable, 
    ComponentFactoryResolver, 
    ApplicationRef, 
    Injector, 
    ComponentRef,
    Type,
    Component,
    EmbeddedViewRef
} from "@angular/core";

@Injectable()
export class DomService {
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) { }

    createComponentRef(component: any): ComponentRef<any> {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.appRef.attachView(componentRef.hostView);        
        return componentRef;
    }

    getDomElement(componentRef: ComponentRef<any>): HTMLElement {
        return componentRef.location.nativeElement;
    }

    appendTo(child: HTMLElement, container?: any) {
        if(typeof container === 'string') {
            if(container !== 'body') {
            if(document.querySelector('#' + container))
                document.querySelector('#' + container).appendChild(child);
            } else {
                document.body.appendChild(child);
            }
        } else {
            container.appendChild(child);
        }
    }

    destroyRef(componentRef: ComponentRef<any>) {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }
}