import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TdComponent } from './td/td.component';
import { RcComponent } from './rc/rc.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/td', pathMatch: 'full' },
  { path: 'td', component: TdComponent },
  { path: 'rc', component: RcComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TdComponent,
    RcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
