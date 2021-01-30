import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TranslatorModule } from './translator/translator.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { TemplateModule } from './template/template.module';
import { SharedService } from '../shared/shared.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
TemplateModule,
FooterModule,
HeaderModule,
TranslatorModule,
AppRoutingModule,
BrowserAnimationsModule,
    BrowserModule
  ],
providers: [
	SharedService,
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
