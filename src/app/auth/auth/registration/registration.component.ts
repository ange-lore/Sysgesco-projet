import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../../../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm!:FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router){}

  ngOnInit() {
    //Validation

    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required, Validators.minLength(4)],
      prenom: ['', Validators.required, Validators.minLength(4)],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  save(){
    this.submitted = true;

    if (this.registerForm.invalid){
      alert('veillez bien remplir les champs')
    }else{
      this.auth.register(
        this.registerForm.getRawValue().nom,
          this.registerForm.getRawValue().prenom,
          this.registerForm.getRawValue().email,
          this.registerForm.getRawValue().mdp
        )
        .subscribe(res =>{
          alert("User Successfully Register. ");
          this.router.navigate(['/login'])
        },error =>{
          console.log("error");
        });
    }
  }
}


