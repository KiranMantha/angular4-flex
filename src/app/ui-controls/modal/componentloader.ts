import {
    Type,
    ComponentFactoryResolver,
    Renderer2,
    ComponentRef,
    ComponentFactory,
    Injector,
    ApplicationRef,
    EmbeddedViewRef
} from "@angular/core";


export class ComponentLoader<T> {
    public componentRef: ComponentRef<T>;

    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _appRef: ApplicationRef,
        private _renderer: Renderer2,
        private _injector: Injector
    ) {

    }

    load(compType: Type<T>): ComponentLoader<T> {
        this.componentRef = this._componentFactoryResolver
            .resolveComponentFactory<T>(compType)
            .create(this._injector);

        this._appRef.attachView(this.componentRef.hostView);

        return this;
    }

    appendTo(containerId: string): ComponentLoader<T> {
        let container = containerId ? containerId : 'body';
        const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        document.querySelector(container).appendChild(domElem);        
        return this;
    }

    destroy() {
        this._appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
    }
}