import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'wilber';
  public nameUpper: string = 'WILBER';
  public fullName: string = 'WiLbEr lUnA';


  public customDate: Date = new Date();

}
