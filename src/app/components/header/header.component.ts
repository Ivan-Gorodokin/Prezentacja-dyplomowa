import { Component, OnInit } from '@angular/core';
import {
  NavigationService,
  NavigationServiceData,
} from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public navList: NavigationServiceData[] = [];

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.navList = this.navService.NavList;
  }

  navigateToSlideNr(slideNr: number) {
    this.navService.navigateToSlideNr(slideNr);
  }
}
