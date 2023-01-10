import { Component, OnInit } from '@angular/core';
import {LangSelect, NavLinks} from "../../../../models/header.model";
import {LANG_SELECT, NAV_LINKS} from "../../../../statics/header.static";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks: NavLinks[] = NAV_LINKS;
  langSelect: LangSelect[] = LANG_SELECT;
  selectedLanguage: string = "en"
  isShowDropdown = false

  constructor() { }

  ngOnInit(): void {
  }

  openDropdown() {
    this.isShowDropdown = !this.isShowDropdown
  }

  setLanguage(lang: string) {
    this.selectedLanguage = lang
  }
}
