import { Component, OnChanges, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { navArrowType } from 'src/app/shared/enum/navArrowType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'prezentacja_dyplomowa';
  slideName = '';
  navArrowType = navArrowType;

  constructor(
    public navService: NavigationService,
    private router: Router,
    private routeParams: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log('this.routeParams');
    // console.log(this.routeParams);
    this.navService.SlideName.subscribe((slideName) => {
      this.slideName = slideName;
      console.log(slideName);
    });
  }

  ngOnChanges() {
    console.log(this.navService.isFirstSlide);
    console.log(this.navService.isLastSlide);
  }
}
