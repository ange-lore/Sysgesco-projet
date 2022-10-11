import { NumberInput } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-partconcours',
  templateUrl: './partconcours.component.html',
  styleUrls: ['./partconcours.component.css']
})
export class PartconcoursComponent implements OnInit {

  partconcoursForm: FormGroup;
  submitted = false;
  //@Input() num : Number;
  

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    //console.log(this.num);

    this.partconcoursForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(4)]],
      prenom: ['', [Validators.required, Validators.minLength(4)]],
      datenaiss: ['', [Validators.required]],
      lieu: ['', [Validators.required, Validators.minLength(4)]],
      adresse: ['', [Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{2,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{3})(?: *x(\\d3))?\\s*$'), Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.email]],
      nationalite: ['', Validators.required, Validators.minLength(4)],
      region: ['', [Validators.required, Validators.minLength(4)]],
      filiere: ['', [Validators.required, Validators.minLength(4)]],
      niveau: ['', [Validators.required, Validators.minLength(3)]],
      cni: ['', [Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{2,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{3})(?: *x(\\d3))?\\s*$'), Validators.minLength(9), Validators.maxLength(9)]],
      statut: ['', [Validators.required, Validators.minLength(4)]],
      matrimonial: ['', [Validators.required]],
      image: ["", [Validators.required]],

    })
  }

  onSubmit(){
    this.submitted = true;

    //stop the process here if form is valid
    if(this.partconcoursForm.invalid){
      alert ('veillez bien remplir les champs');
    }else

    alert('success!!');
  }

  

}
