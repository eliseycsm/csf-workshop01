import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProj01';
  fontsize: string = '2em';

  fontSizeChanged($event){
    console.log($event.target.value)
    const val = parseInt($event.target.value)
    this.fontsize = `${val}em`
    console.log(this.fontsize)
  }
}
