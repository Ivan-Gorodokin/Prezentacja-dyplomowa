import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'prezentacja_dyplomowa';
  slideName = '';
  navArrowType = navArrowType;

  constructor(
    public navService: NavigationService,
    // private router: Router,
    private route: ActivatedRoute // private snapshot: ActivatedRouteSnapshot
  ) {}
}
