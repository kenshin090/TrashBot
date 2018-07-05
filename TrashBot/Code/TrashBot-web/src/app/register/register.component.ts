import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;
  
  constructor(
    private fb: FormBuilder
  ) 
  { 
    
  }

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      dateBorn : ['', Validators.required],
      address : ['', Validators.required],
      email : ['', Validators.required],
      passwordConfirm : ['', Validators.required],
    });
  }

  onSubmit()
  {

  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

}
