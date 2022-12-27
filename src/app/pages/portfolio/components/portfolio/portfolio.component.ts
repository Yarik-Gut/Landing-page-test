import { Component, OnInit } from '@angular/core';
import {PortfolioCategory, PortfolioGallery} from "../../../../shared/models/portfolio.model";
import {PORTFOLIO_CATEGORY, PORTFOLIO_GALLERY} from "../../../../shared/statics/portfolio.static";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  PortfolioCategory: PortfolioCategory[] = PORTFOLIO_CATEGORY;
  portfolioGallery: PortfolioGallery[] = PORTFOLIO_GALLERY

  constructor() { }

  ngOnInit() {
  }

}
