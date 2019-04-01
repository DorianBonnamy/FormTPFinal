import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { User } from '../User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nomCtrl: FormControl;
  prenomCtrl: FormControl;
  telephoneCtrl: FormControl;
  emailCtrl: FormControl;
  connaissancesCtrl: FormControl;
  userForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.nomCtrl = fb.control('',[Validators.required, Validators.pattern('^[A-Z][A-Za-z0-9]*$')]);
    this.prenomCtrl = fb.control('',Validators.required);
    this.telephoneCtrl = fb.control('',[Validators.minLength(10), Validators.maxLength(10)]);
    this.emailCtrl = fb.control('',[Validators.required, Validators.email]);
    this.connaissancesCtrl = fb.control('');

    this.userForm = fb.group({
      nom: this.nomCtrl, 
      prenom: this.prenomCtrl,
      telephone: this.telephoneCtrl,
      email: this.emailCtrl,
      connaissances: this.connaissancesCtrl
    })
  }

  ngOnInit() {
  }

  setConnaissance(value){
    console.log(value);
    this.connaissancesCtrl.setValue(value);
  }

  handleClear(){
    this.nomCtrl.setValue ('');
    this.prenomCtrl.setValue('');
    this.telephoneCtrl.setValue(0);
    this.emailCtrl.setValue('');
    this.connaissancesCtrl.setValue('');
  }

  handleSubmit(value ){
    console.log("submit", this.userForm.value)
  }

}
