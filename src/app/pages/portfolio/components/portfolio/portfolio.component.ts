import { Component, OnInit } from '@angular/core';
import {PortfolioCategory, PortfolioGallery} from "../../../../shared/models/portfolio.model";
import {EXTRA_DATA, PORTFOLIO_CATEGORY, PORTFOLIO_GALLERY} from "../../../../shared/statics/portfolio.static";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  PortfolioCategory: PortfolioCategory[] = PORTFOLIO_CATEGORY;
  portfolioGallery: PortfolioGallery[] = PORTFOLIO_GALLERY;
  extraData: PortfolioGallery[] = EXTRA_DATA

  allCardLoad: boolean = false
  activeTab: string = ""

  constructor() { }

  ngOnInit() {
  }

  setActive(tabIndex: string) {
    this.activeTab = tabIndex
    this.portfolioGallery = []
    PORTFOLIO_GALLERY.forEach((card) => {
      if (this.checkFilter(card)) {
        this.portfolioGallery.push(card)
      }
    })
  }

  private checkFilter(card: PortfolioGallery): boolean {
    return card.categoryId === this.activeTab || this.activeTab === ""
  }

  getMoreData() {
    EXTRA_DATA.forEach((card) => {
      this.portfolioGallery.push(card)
      this.allCardLoad = true
    })
  }
}
