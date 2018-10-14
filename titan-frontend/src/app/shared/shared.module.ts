/* Modules */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

const materialModules: any[] = [
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
];

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
    ...modules,
    ...materialModules
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
    ...materialModules,
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
