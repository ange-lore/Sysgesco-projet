import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ["", [Validators.required, Validators.minLength(8)]],
    })
  }

  // initLogForm() {
  //   this.loginForm = this.formBuilder.group({
  //     email: ["", [Validators.required, Validators.email]],
  //     mdp: ["", [Validators.required, Validators.minLength(8)]],
  //   });
  // }

  onSubmit(){
    this.submitted = true;

    //stop the process here if form is valid
    if(this.loginForm.invalid){
      alert('Veillez bien remplir les champs')
    }else

    alert('success!!')
  }
}


