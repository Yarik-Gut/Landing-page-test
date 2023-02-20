import {Component, HostListener, ViewChild, Directive, ElementRef, Renderer2} from '@angular/core';
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
}

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (offset > 0) {
      this.renderer.addClass(this.el.nativeElement, 'header-scrolled');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'header-scrolled');
    }
  }
}
