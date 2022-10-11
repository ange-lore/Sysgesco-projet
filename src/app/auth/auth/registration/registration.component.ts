import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
//import { Hero } from './hero';


// const myHero =  new Hero(42, 'SkyDog',
//                        'Rollover',
//                        'Leslie@gmail.com', 'moi');
// console.log('My hero is called ' + myHero.nom); // "My hero is called SkyDog"
// console.log('My hero is called ' + myHero.prenom);

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm!:FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder){}

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
    }else

    alert("success");
  }
}


//   powers = ['Really Smart', 'Super Flexible',
//   'Super Hot', 'Weather Changer'];

// model = new Hero(18, 'Dr IQ', 'ange', 'ange@gmail.com',this.powers[0], );

// submitted = false;
// nom: any;
// prenom: any;
// email: any;
// mdp: any;

// onSubmit() { this.submitted = true; }

//   public user: Hero = new Hero(42, '', '', '', '');

//   registerForm = new FormGroup({
//     nom: new FormControl(''),
//     prenom: new FormControl(''),
//     email: new FormControl(''),
//     mdp: new FormControl(''),
//   });
  

//   preview: string = '';

//   constructor() { }

//   ngOnInit(): void {

//   }

//   save() {
//     this.preview = JSON.stringify(this.registerForm.touched);
//   }

//   newHero() {
//     this.model = new Hero(42, '', '', '', '');
//   }
// 

