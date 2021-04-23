import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-EventBinding';
  AlertWhenClick(): void {
    alert("Click ishledi!");
  };

  ConsoleRangeValue():void{
    let range = document.querySelector('input[type="range"]');
    console.log(range.value);
  }
}
