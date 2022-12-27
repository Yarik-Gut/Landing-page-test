import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/components/home/home.component";
import {ServicesComponent} from "./pages/services/components/services/services.component";
import {PortfolioComponent} from "./pages/portfolio/components/portfolio/portfolio.component";
import {PricingComponent} from "./pages/pricing/components/pricing/pricing.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'pricing', component: PricingComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
