import {PortfolioCategory, PortfolioGallery} from "../models/portfolio.model";

export const PORTFOLIO_CATEGORY: PortfolioCategory[] = [
  {
    category: 'portfolio.all',
    index: "",
    isActive: true,
  },
  {
    category: 'portfolio.comercial',
    index: "commercial",
    isActive: false,
  },
  {
    category: 'portfolio.residential',
    index: "resident",
    isActive: false,
  },
  {
    category: 'portfolio.office',
    index: "office",
    isActive: false,
  },
  {
    category: 'portfolio.other',
    index: "other",
    isActive: false,
  },
]

export const PORTFOLIO_GALLERY: PortfolioGallery[] = [
  {
    id: 1,
    gallery: 'assets/images/photo-1.png',
    categoryId: "resident",
  },
  {
    id: 2,
    gallery: 'assets/images/photo-2.png',
    categoryId: "office",
  },
  {
    id: 3,
    gallery: 'assets/images/photo-3.png',
    categoryId: "resident",
  },
  {
    id: 4,
    gallery: 'assets/images/photo-4.png',
    categoryId: "resident",
  },
  {
    id: 5,
    gallery: 'assets/images/photo-5.png',
    categoryId: "other",
  },
  {
    id: 6,
    gallery: 'assets/images/photo-6.png',
    categoryId: "office",
  },
  {
    id: 7,
    gallery: 'assets/images/photo-7.png',
    categoryId: "resident",
  }
  ,{
    id: 8,
    gallery: 'assets/images/photo-8.png',
    categoryId: "commercial",
  }
]

export const EXTRA_DATA: PortfolioGallery[] = [
  {
    id: 9,
    gallery: 'assets/images/photo-1.png',
    categoryId: "resident",
  },
  {
    id: 10,
    gallery: 'assets/images/photo-2.png',
    categoryId: "office",
  },
  {
    id: 11,
    gallery: 'assets/images/photo-3.png',
    categoryId: "resident",
  },
  {
    id: 12,
    gallery: 'assets/images/photo-4.png',
    categoryId: "resident",
  },
]
