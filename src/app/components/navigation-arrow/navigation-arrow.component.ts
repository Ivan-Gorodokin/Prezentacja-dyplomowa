import { Component, Input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { navArrowType } from 'src/app/shared/enum/navArrowType';

@Component({
  selector: 'app-navigation-arrow',
  templateUrl: './navigation-arrow.component.html',
  styleUrls: ['./navigation-arrow.component.scss'],
})
export class NavigationArrowComponent {
  @Input() public type!: navArrowType;

  public firstPage = false;
  public lastPage = false;
  constructor(public navService: NavigationService) {}

  navigateToPrevious(): void {
    this.navService.navigateToPreviousSlide();
  }

  navigateToNext(): void {
    this.navService.navigateToNextSlide();
  }
}
