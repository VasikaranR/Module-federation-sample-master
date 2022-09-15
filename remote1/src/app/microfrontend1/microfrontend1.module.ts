import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Microfrontend1RoutingModule } from './microfrontend1-routing.module';
import { Microfrontend1Component } from './microfrontend1/microfrontend1.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';

@NgModule({
  declarations: [
    Microfrontend1Component,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    Microfrontend1RoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[UserService]
})
export class Microfrontend1Module { }
