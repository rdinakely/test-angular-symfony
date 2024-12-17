import {Component, inject, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ]
})
export class LoginComponent {
  protected readonly form: FormGroup
  protected readonly invalidCredentials = signal(false)

  private readonly formBuilder = inject(FormBuilder)
  private readonly router = inject(Router)
  private readonly authService = inject(AuthService)

  constructor() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  handleLogin() {
    if (!this.form.valid) {
      return
    }

    const { email, password } = this.form.value
    this.invalidCredentials.set(false)

    this.authService
      .login({ email, password })
      .subscribe(({ isAuthenticated }) => {
        if (isAuthenticated) {
          this.router.navigate(['/'])
          return
        }

        this.invalidCredentials.set(true)
      })
  }
}
