import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { GotyComponent } from './goty/goty.component';

@NgModule({
  declarations: [
    HomeComponent,
    GotyComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    GotyComponent
  ]
})
export class PagesModule { }
