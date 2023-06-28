import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

export interface TablePair {
  pro: string;
  con: string;
}

@Component({
  selector: 'app-pros-and-cons',
  templateUrl: './pros-and-cons.component.html',
  styleUrls: ['./pros-and-cons.component.scss'],
})
export class ProsAndConsComponent implements OnInit {
  data: TablePair[] = [
    { pro: `przejrzystość`, con: `brak skalowalności` },
    { pro: `interaktywność`, con: `ograniczony zakres urządzeń` },
    {
      pro: `funkcjonalność`,
      con: `niewiele dostępnych standardów komunikacji`,
    },
    { pro: `poziomy zaawansowania`, con: `mało narzędzi do analizy danych` },
    { pro: `wsparcie`, con: `` },
  ];

  constructor(
    public navService: NavigationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const url = this.route.snapshot.url[0].path;
    this.navService.updateStateOnRefresh(url);
  }
}
