import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm!:FormGroup
  title = 'SYGESCO';
  submitted = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    //Validation

    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required]
    })
  }

  save(){
    this.submitted = true

    if (this.registerForm.invalid){
      return
    }

    alert("success")
  }
}




