import { Component, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component(
    { selector: 'app-root',
      templateUrl: './app.component.html', 
      styleUrls: ['./app.component.css'], 
    })
export class AppComponent {
  title = 'desafiofrontend';
  isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  @ViewChild(MatSidenav) sidebar?: MatSidenav;

  constructor(public router: Router) {}

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile = window.innerWidth < 768;
  }

  toggleMobileSidebar(): void {
    this.sidebar?.toggle();
  }

  closeMobileSidebar(): void {
    if (this.isMobile) {
      this.sidebar?.close();
    }
  }
}
