import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  name: any;
  email: any;
  postalAddress: any;
  comments: any;

  isNameValid: boolean = false;
  isEmailValid: boolean = false;
  isEmailFormValid: boolean = false;
  isPostalAddressValid: boolean = false;
  isFormValid: boolean = false;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      postalAddress: ['', Validators.required],
      comments: ''
    });
  }

  ngOnInit(): void {
  }



  onSubmit() {
    if (this.form.valid) {
      this.isFormValid = true;
    } else {
      this.isNameValid = this.form.get('name').errors?.required;
      this.isEmailFormValid = this.form.get('email').errors.email;
      this.isEmailValid = this.form.get('email').errors.required;
      this.isPostalAddressValid = this.form.get('postalAddress').errors.required;
    }
  }

  toggle() {

  }

}
