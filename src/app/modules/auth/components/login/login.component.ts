import { Component, OnDestroy } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginForm } from '../../../core/models/forms.model';
import * as AuthActions from '../../store/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup<LoginForm> = this.formSerivce.initLoginForm();

  get controls() {
    return this.loginForm.controls;
  }
  constructor(
    private formSerivce: FormService,
    private store: Store<AppState>
  ) {}

  getErrorMessage(control: FormControl) {
    return this.formSerivce.getErrorMessage(control);
  }

  onLogin() {
    this.store.dispatch(
      AuthActions.login({ loginData: this.loginForm.getRawValue() })
    );
  }

  ngOnDestroy(): void {
    this.store.dispatch(AuthActions.clearError());
  }

}
