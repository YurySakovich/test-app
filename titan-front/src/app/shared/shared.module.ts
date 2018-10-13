/* Modules */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

const modules: any[] = [
  BrowserModule,
  CommonModule,
  FormsModule,
  HttpModule,
  RouterModule,
  BrowserAnimationsModule,
];

/* Components */
const components: any[] = [
];

const directives: any[] = [
];

/* Pipes */
const pipes: any[] = [
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...components,
    ...directives,
    ...pipes
  ],
  providers: [
  ],
  exports: [
    ...modules,
    ...components,
    ...directives,
    ...pipes
  ],
  entryComponents: [
    ...components
  ]
})

export class SharedModule {
}
