import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loremValue = 'lorem ipsum';
  public loremValue2 = 'LOREM IPSUM';
  public jsonObject = {
    property: 'lorem'
  };
  public percentTest = 0.5;
  public today = Date.now();
}
