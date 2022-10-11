import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  paiementForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.paiementForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(4)]],
      numero: ['', [Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{2,3}))?[-. (]*(\\d{4})[-. )]*(\\d{4})[-. ]*(\\d{4})(?: *x(\\d4))?\\s*$'), Validators.maxLength(16)]],
      //email: ['', [Validators.required, Validators.email]],
      libelle: ['', Validators.required, ],
      date: ['', [Validators.required]],
      date1: ['', [Validators.required]],
      cvc: ['', [Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{2,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{3})(?: *x(\\d3))?\\s*$'), Validators.minLength(3), Validators.maxLength(3)]],
      cni: ['', [Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{2,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{3})(?: *x(\\d3))?\\s*$'), Validators.minLength(3), Validators.maxLength(9)]],
      // filiere: ['', [Validators.required, Validators.minLength(4)]],
      // niveau: ['', [Validators.required, Validators.minLength(3)]],
      
      // statut: ['', [Validators.required, Validators.minLength(4)]],
      // matrimonial: ['', [Validators.required]],
      // image: ["", [Validators.required]],

    })
  }

  onSubmit(){
    this.submitted = true;

    //stop the process here if form is valid
    if(this.paiementForm.invalid){
      alert ('veillez bien remplir les champs');
    }else

    alert('success!!');
  }

  
  

}
