import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form: FormGroup | any;

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      streetAddress: new FormControl(null, [Validators.required]),
      streetAddressLine2: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      postal: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern('^[0-9]{0,5}$')]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]{0,10}$')]),
      email: new FormControl(null, [Validators.email, Validators.required])
    })
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset()
    }
  }
}
