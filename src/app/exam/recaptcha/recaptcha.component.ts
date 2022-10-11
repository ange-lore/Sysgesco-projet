import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css']
})
export class RecaptchaComponent implements OnInit {

  captcha: string;                                // empty = not yet proven to be a human, anything else = human
  email: string;

    constructor() { 
        this.captcha = '';
        this.email = 'Secret@email.com';
    }


  ngOnInit(): void {
  }
  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha);
}

}
