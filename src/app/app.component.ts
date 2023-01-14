import {Component, HostListener, ViewChild} from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Landing';
  @ViewChild('header') header: any;
  isOnTop: boolean = true;

  constructor(private translocoService: TranslocoService) {
    translocoService.setDefaultLang('ua')
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isOnTop = this.header.nativeElement.offsetTop === 1;
  }
}
