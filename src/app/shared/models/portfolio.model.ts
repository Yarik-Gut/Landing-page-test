export interface PortfolioCategory {
  readonly category: string;
  readonly index: string;
  readonly isActive: boolean;
}

export interface PortfolioGallery {
  readonly gallery: string;
  readonly id?: number;
  readonly categoryId: string
}
