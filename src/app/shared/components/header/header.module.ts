import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {AppRoutingModule} from "../../../app-routing.module";
import {CommonModule} from "@angular/common";
import {TranslocoRootModule} from "../../../transloco-root.module";


@NgModule({
    declarations: [HeaderComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    TranslocoRootModule
  ],
    exports: [HeaderComponent]
})
export class HeaderModule {}
