import { Component, OnInit } from '@angular/core';
import {PRICING} from "../../../../shared/statics/pricing.static";
import {Pricing} from "../../../../shared/models/pricing.model";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  pricing: Pricing[] = PRICING

  constructor() { }

  ngOnInit() {
  }

}
