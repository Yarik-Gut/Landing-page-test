import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {AppRoutingModule} from "../../../app-routing.module";
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [HeaderComponent],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
    exports: [HeaderComponent]
})
export class HeaderModule {}
