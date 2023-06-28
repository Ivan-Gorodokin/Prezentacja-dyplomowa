import { Injectable, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface NavigationServiceData {
  address: string;
  slideName: string;
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService implements OnInit {
  public currentSlideIndexSignal = signal<number>(0);
  public currentSlideNameSignal = computed<string>(
    () => this.NavList[this.currentSlideIndexSignal()].slideName
  );

  private navList: NavigationServiceData[] = [
    { address: 'frontpage', slideName: 'Strona Tytułowa' },
    { address: 'cel_pracy', slideName: 'Cel pracy' },
    { address: 'komponenty_programowe', slideName: 'Komponenty programowe' },
    { address: 'home_io', slideName: 'Symulator Home I/O' },
    {
      address: 'scenariusze_automatyzacji',
      slideName: 'Scenariusze Automatyzacji',
    },
    { address: 'demo', slideName: 'Demonstracja pracy systemu' },
    { address: 'wady_i_zalety', slideName: 'Wady i zalety symulatora' },
    {
      address: 'zastosowanie_symulatora',
      slideName: 'Zastosowania symulatora',
    },
    { address: 'podsumowanie', slideName: 'Podsumowanie' },
  ];

  ngOnInit() {
    // this.currentSlideIndexSignal = signal<number>(0);
    console.log('>>> >>> >>> >>> >>> oninit');
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  get TotalNumberOfSlides(): number {
    return this.navList.length;
  }

  get NavList(): NavigationServiceData[] {
    return this.navList;
  }

  navigateToNextSlide(): void {
    this.router.navigate([
      this.navList[this.currentSlideIndexSignal() + 1].address,
    ]);
    this.currentSlideIndexSignal.update((value) => value + 1);
    console.log(this.currentSlideIndexSignal());
  }

  navigateToPreviousSlide(): void {
    this.router.navigate([
      this.navList[this.currentSlideIndexSignal() - 1].address,
    ]);
    this.currentSlideIndexSignal.update((value) => value - 1);
    console.log(this.currentSlideIndexSignal());
  }

  navigateToSlideNr(slideNr: number): void {
    this.router.navigate([this.navList[slideNr].address]);
    this.currentSlideIndexSignal.update(() => slideNr);
    console.log(this.currentSlideIndexSignal());
  }

  findIndexByUrl(url: string): number {
    return this.navList.findIndex((item) => item.address == url) || 0;
  }

  updateStateOnRefresh(url: string): void {
    if (this.currentSlideIndexSignal() != 0) return;
    console.log('updateStateOnRefresh()');
    this.currentSlideIndexSignal.update(() => this.findIndexByUrl(url));
  }
}
