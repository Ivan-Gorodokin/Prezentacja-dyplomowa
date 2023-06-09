import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navList: string[] = [
    'frontpage',
    'cel_pracy',
    'komponenty_programowe',
    'scenariusze_automatyzacji',
    // 'projektowanie_systemu',
    'demo',
    'wady_i_zalety',
    'zastosowanie_symulatora',
    'podsumowanie',
  ];

  constructor(private router: Router) {}

  getCurrentPageIndex(currentPage: string): number {
    return this.navList.findIndex((item) => item == currentPage);
  }

  getNumberOfPages(): number {
    return this.navList.length;
  }

  navigateToNext(currentPage: string): void {
    let currentIndex = this.navList.findIndex((item) => item == currentPage);
    this.router.navigate([this.navList[currentIndex + 1]]);
  }

  navigateToPrevious(currentPage: string): void {
    let currentIndex = this.navList.findIndex((item) => item == currentPage);
    this.router.navigate([this.navList[currentIndex - 1]]);
  }
}
