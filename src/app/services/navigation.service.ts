import { Injectable, OnInit, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, tap } from 'rxjs';

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
  private currentSlideIndex = 0;
  private currentSlideIndex$ = new BehaviorSubject<number>(0);
  private currentSlideName$ = new BehaviorSubject<string>('');

  private navList: NavigationServiceData[] = [
    { address: 'frontpage', slideName: 'Strona Tytułowa' },
    { address: 'cel_pracy', slideName: 'Cel pracy' },
    { address: 'komponenty_programowe', slideName: 'Komponenty programowe' },
    {
      address: 'scenariusze_automatyzacji',
      slideName: 'Scenariusze Automatyzacji',
    },
    // { address: 'projektowanie_systemu', slideName: 'Projektowanie systemu' },
    { address: 'demo', slideName: 'Demonstracja pracy systemu' },
    { address: 'wady_i_zalety', slideName: 'Wady i zalety symulatora' },
    {
      address: 'zastosowanie_symulatora',
      slideName: 'Zastosowania symulatora',
    },
    { address: 'podsumowanie', slideName: 'Podsumowanie' },
  ];

  ngOnInit() {
    this.currentSlideIndex$
      .pipe(
        tap((index) => {
          this.currentSlideName$.next(this.NavList[index].slideName);
          console.log(index);
        })
      )
      .subscribe((index) => (this.currentSlideIndex = index));

    console.log('oninit');
  }

  constructor(private router: Router) {}

  get CurrentSlideIndex(): BehaviorSubject<number> {
    return this.currentSlideIndex$;
  }

  get TotalNumberOfSlides(): number {
    return this.navList.length;
  }

  get SlideName(): BehaviorSubject<string> {
    return this.currentSlideName$;
  }

  get NavList(): NavigationServiceData[] {
    return this.navList /* .map() */;
  }

  navigateToNextSlide(/* currentSlideAddress: string */): void {
    // let currentIndex = this.navList.findIndex(
    //   (item) => item.slideName == currentSlideAddress
    // );
    this.router.navigate([
      this.navList[this.currentSlideIndexSignal() + 1].address,
    ]);
    // this.currentSlideIndex$.next(this.currentSlideIndex + 1);
    this.currentSlideIndexSignal.update((value) => value + 1);
    console.log(this.currentSlideIndexSignal());
  }

  navigateToPreviousSlide(/* currentSlideAddress: string */): void {
    // let currentIndex = this.navList.findIndex(
    //   (item) => item.slideName == currentSlideAddress
    // );
    this.router.navigate([
      this.navList[this.currentSlideIndexSignal() - 1].address,
    ]);
    // this.currentSlideIndex$.next(this.currentSlideIndex - 1);
    this.currentSlideIndexSignal.update((value) => value - 1);
    console.log(this.currentSlideIndexSignal());
  }

  navigateToSlideNr(slideNr: number): void {
    this.router.navigate([this.navList[slideNr].address]);
    // this.currentSlideIndex$.next(slideNr);
    this.currentSlideIndexSignal.update(() => slideNr);
    console.log(this.currentSlideIndex);
    console.log(this.currentSlideIndexSignal());
  }

  isFirstSlide(): boolean {
    return this.currentSlideIndex == 0;
  }

  isLastSlide(): boolean {
    return this.currentSlideIndex == this.NavList.length + 1;
  }
}
