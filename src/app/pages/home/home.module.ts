import {NgModule} from "@angular/core";
import {AppRoutingModule} from "../../app-routing.module";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./components/home/home.component";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
})
export class HomeModule {}
