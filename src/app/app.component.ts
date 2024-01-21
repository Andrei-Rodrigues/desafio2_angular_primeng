import { Component, createPlatform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UserInfo } from './model/user-info';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    InputMaskModule,
    InputNumberModule,
    DialogModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  formUserInfo: FormGroup = this.createForm();

  visible: boolean = false;
  userInfo?: UserInfo;

  constructor(private formBuilder: FormBuilder) { }

  createForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, Validators.required],
      age: [null, Validators.required],
      phone_number: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        street: [null, Validators.required],
        number: [null, Validators.required],
        neighborhood: [null, Validators.required],
        city: [null, Validators.required]
      })
    })
  }

  onSubmit() {
    this.visible = true;
    this.userInfo = this.formUserInfo.value;
    this.formUserInfo.reset();
  }

}
