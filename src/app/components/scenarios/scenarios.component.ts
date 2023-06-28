import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.scss'],
})
export class ScenariosComponent implements OnInit {
  constructor(
    public navService: NavigationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const url = this.route.snapshot.url[0].path;
    this.navService.updateStateOnRefresh(url);
  }
}
