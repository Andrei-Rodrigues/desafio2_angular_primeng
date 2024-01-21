import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';

bootstrapApplication(
  AppComponent,
  {
    providers: [
      importProvidersFrom(
        BrowserModule,
        BrowserAnimationsModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        InputMaskModule,
        InputNumberModule,
        DialogModule
      )
    ],
  }
).catch((err) => console.error(err));