import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-project-demo',
  templateUrl: './project-demo.component.html',
  styleUrls: ['./project-demo.component.scss'],
})
export class ProjectDemoComponent implements OnInit {
  constructor(
    public navService: NavigationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const url = this.route.snapshot.url[0].path;
    this.navService.updateStateOnRefresh(url);
  }
}
