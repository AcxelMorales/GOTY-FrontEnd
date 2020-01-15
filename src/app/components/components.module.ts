import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    NavbarComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  exports: [
    NavbarComponent,
    GraphComponent
  ]
})
export class ComponentsModule { }
