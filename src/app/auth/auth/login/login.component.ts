import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../../../Services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(4)]],
      mdp: ["", [Validators.required, Validators.minLength(4)]],
    })
  }

  onSubmit(){
    this.submitted = true;

    //stop the process here if form is valid
    if(this.loginForm.invalid){
      alert('Veillez bien remplir les champs')
    }else{
      this.auth.login(this.loginForm.getRawValue().email, this.loginForm.getRawValue().mdp)
        .subscribe((res) =>{
          console.log(res);
          alert(this.loginForm.getRawValue().email);
          alert(this.loginForm.getRawValue().mdp);
        })
    }
  }
}


