import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginUser } from 'src/app/shared/models/login-user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messaggeService: MessageService
  ) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void {
    this.form = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  login(): void {
    const user: LoginUser = this.form.getRawValue() as LoginUser;
    if (user.password === 'admin' && user.username === 'casacultura') {
      this.router.navigate(['/home']);
    } else {
      this.messaggeService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Usuario o contraseña incorrectos',
      });
    }
  }
}
