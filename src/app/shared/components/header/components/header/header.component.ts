import { Component, OnInit } from '@angular/core';
import {NavLinks} from "../../../../models/header.model";
import {LANGUAGES, NAV_LINKS} from "../../../../statics/header.static";

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

  constructor() { }

  ngOnInit(): void {
  }

  openDropdown() {
    this.isShowDropdown = !this.isShowDropdown
  }

  setLanguage(language: string) {
    this.selectedLanguage = language
  }
}
