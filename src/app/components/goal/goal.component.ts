import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {
  constructor(
    public navService: NavigationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const url = this.route.snapshot.url[0].path;
    this.navService.updateStateOnRefresh(url);
  }
}
