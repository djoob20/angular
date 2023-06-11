import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  onSubmitForm(form: NgForm):void{
    console.log(form.value);
  }
}
