import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-stock-component',
  templateUrl: './stock-component.component.html',
  styleUrls: ['./stock-component.component.scss'],
})
export class StockComponentComponent implements OnInit {
  slideName: string = 'Slide Name';
  // this.navService.CurrentSlideName /* ( this.routeParams. ) */;
  // slideName: string = 'Slide Name';

  constructor(
    private navService: NavigationService,
    private router: Router,
    private routeParams: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('this.routeParams');
    console.log(this.routeParams);
  }
}
