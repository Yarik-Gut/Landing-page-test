import { Component, OnInit } from '@angular/core';
import {NavLinks} from "../../../../models/header.model";
import {LANGUAGES, NAV_LINKS} from "../../../../statics/header.static";
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks: NavLinks[] = NAV_LINKS;
  langSelect: string[] = LANGUAGES
  isShowDropdown = false

  constructor(private transloco: TranslocoService, private service: TranslocoService) { }

  ngOnInit(): void {
  }

  openDropdown() {
    this.isShowDropdown = !this.isShowDropdown
  }

  setActiveLang(language: string) {
    this.transloco.setActiveLang(language);
    this.isShowDropdown = !this.isShowDropdown
  }

  get ActiveLang() {
    return this.service.getActiveLang();
  }
}
