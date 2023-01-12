import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/components/footer/footer.component';
import { ServicesComponent } from './pages/services/components/services/services.component';
import {HeaderModule} from "./shared/components/header/header.module";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './pages/home/components/home/home.component';
import { PortfolioComponent } from './pages/portfolio/components/portfolio/portfolio.component';
import { PricingComponent } from './pages/pricing/components/pricing/pricing.component';
import { FormComponent } from './pages/form/components/form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ServicesComponent,
    HomeComponent,
    PortfolioComponent,
    PricingComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
