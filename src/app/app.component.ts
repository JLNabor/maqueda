import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isMobile:boolean=false;
  constructor() { }

  ngOnInit() {
    this.getScreen();
  }

  public getScreen(){
    if(screen.width < 1000){
      this.isMobile = true;
    }
  }

}
