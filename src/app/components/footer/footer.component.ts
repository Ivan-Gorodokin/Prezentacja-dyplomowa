import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent /* implements OnInit  */ {
  public currentPageNr: number;
  public nrOfPages: number;

  constructor(private navService: NavigationService) {
    // this.nrOfPages = this.navService.getTotalNumberOfSlides();
    this.nrOfPages = this.navService.getNumberOfPages();
    this.currentPageNr = 0;
  }
}
