import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input
} from "@angular/core";
import { ViewPortService } from "../view-port/view-port.service";

@Directive({
  selector: '[ifViewportSize]'
})
export class IfViewportSizeDirective {
    private screenSize: string;


  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private viewPortService: ViewPortService
  ) {}

   ngOnInit() {
     this.viewPortService.update.subscribe(() => {
       this.chnageSize(this.screenSize);
     })
   }

  // will change the screen value
  chnageSize(screenSize: string):void{
    if (this.viewPortService.isTheSameScreenSize(screenSize)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  // screen size from the Directive.
  @Input() set ifViewportSize(screenSize: string) {
    this.screenSize = screenSize;
    this.chnageSize(screenSize);
  }
}