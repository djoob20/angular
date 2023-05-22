import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  userEmail = "default@value.com";
  constructor(private router: Router){

  }
  onContinue(): void{
    this.router.navigateByUrl('facesnaps')

  }

  onSubmitForm():void{
    console.log(this.userEmail);
  }
}
