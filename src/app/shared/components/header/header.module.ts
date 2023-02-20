import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {AppRoutingModule} from "../../../app-routing.module";
import {CommonModule} from "@angular/common";
import {TranslocoRootModule} from "../../../transloco-root.module";
import {ScrollDirective} from "../../../app.component";


@NgModule({
    declarations: [HeaderComponent, ScrollDirective],
  imports: [
    AppRoutingModule,
    CommonModule,
    TranslocoRootModule
  ],
    exports: [HeaderComponent, ScrollDirective]
})
export class HeaderModule {}
