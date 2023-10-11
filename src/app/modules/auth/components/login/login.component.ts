import { Component } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginForm } from '../../../core/models/forms.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup<LoginForm> = this.formSerivce.initLoginForm();

  get controls() {
    return this.loginForm.controls;
  }
  constructor(private formSerivce: FormService) {}

  getErrorMessage(control: FormControl) {
    return this.formSerivce.getErrorMessage(control);
  }
}

