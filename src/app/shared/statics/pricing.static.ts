import {Pricing} from "../models/pricing.model";

export const PRICING: Pricing[] = [
  {
    level: 'pricing.basic',
    price: 25,
    skillFirst: 'pricing.interiorDesign',
    skillSecond: 'pricing.projectDiscussion',
    skillThird: 'pricing.spacePlanning',
    skillFourth: 'pricing.onlineConsultation'
  },
  {
    level: 'pricing.standart',
    price: 50,
    skillFirst: 'pricing.colorAnalysis',
    skillSecond: 'pricing.spacePlanning',
    skillThird: 'pricing.homeRemodeling',
    skillFourth: 'pricing.3DInteriorModel'
  },
  {
    level: 'pricing.premium',
    price: 80,
    skillFirst: 'pricing.conceptDevelopment',
    skillSecond: 'pricing.decorationServices',
    skillThird: 'pricing.interiorArchitecture',
    skillFourth: 'pricing.flooringInstallation'
  }
]
