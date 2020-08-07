import { Component, HostListener } from '@angular/core';
import { ViewPortService } from './view-port/view-port.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private viewPortService:ViewPortService){}

  ngOnInit(){
  this.viewPortService.setScreenWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onScreenReaize(event){
     this.viewPortService.setScreenWidth(event.target.innerWidth);
  }

}
