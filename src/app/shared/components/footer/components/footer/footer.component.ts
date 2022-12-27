import { Component, OnInit } from '@angular/core';
import {NavLinks} from "../../../../models/header.model";
import {NAV_LINKS} from "../../../../statics/header.static";
import {FooterContacts, FooterSocial} from "../../../../models/footer.model";
import {FOOTER_CONTACTS, FOOTER_SOCIAL} from "../../../../statics/footer.static";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  navLinks: NavLinks[] = NAV_LINKS;
  footerContacts: FooterContacts[] = FOOTER_CONTACTS;
  footerSocial: FooterSocial[] = FOOTER_SOCIAL

  constructor() { }

  ngOnInit() {
  }

}
