import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getLanguage(): string {
    return localStorage.getItem('lang') || 'EN';
  }

  setLanguage(lg: string) {
    localStorage.setItem('lang', lg);
  }
}
