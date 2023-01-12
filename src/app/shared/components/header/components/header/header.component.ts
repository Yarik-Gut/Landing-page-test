import { Component, OnInit } from '@angular/core';
import {NavLinks} from "../../../../models/header.model";
import {LANGUAGES, NAV_LINKS} from "../../../../statics/header.static";
import {TranslocoService} from "@ngneat/transloco";
import {Clipboard} from "@angular/cdk/clipboard";
import {LocalStorageService} from "../../../../services/local-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks: NavLinks[] = NAV_LINKS;
  langSelect: string[] = LANGUAGES
  selectedLanguage: string = "EN"
  isShowDropdown = false

  constructor(private translocoService: TranslocoService, private clipboard: Clipboard, private ls: LocalStorageService) {
    this.selectedLanguage = this.ls.getLanguage()
  }

  ngOnInit(): void {
  }

  openDropdown() {
    this.isShowDropdown = !this.isShowDropdown
  }

  setLanguage(language: string) {
    this.selectedLanguage = language
    this.translocoService.setActiveLang(language);
    this.ls.setLanguage(language)
  }
}
