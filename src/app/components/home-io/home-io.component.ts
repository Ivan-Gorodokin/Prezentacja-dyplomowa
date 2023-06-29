import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

export interface Device {
  type: string;
  amount: number;
}
@Component({
  selector: 'app-home-io',
  templateUrl: './home-io.component.html',
  styleUrls: ['./home-io.component.scss'],
})
export class HomeIoComponent implements OnInit {
  public devices: Device[] = [
    { type: 'Światła', amount: 22 },
    { type: 'Włączniki świateł', amount: 29 },
    { type: 'Regulatory jasności oświetlenia', amount: 16 },
    { type: 'Czujniki jasności', amount: 11 },
    { type: 'Rolety', amount: 13 },
    { type: 'Przełączniki góra/dół (sterowanie roletami)', amount: 12 },
    { type: 'Drzwi garażowe', amount: 1 },
    { type: 'Brama wjazdowa', amount: 1 },
    { type: 'Programowalny pilot', amount: 1 },
    { type: 'Grzejniki', amount: 12 },
    { type: 'Termostaty', amount: 11 },
    { type: 'Alarm centralny', amount: 1 },
    { type: 'Syrena', amount: 2 },
    { type: 'Czujniki otwarcia drzwi', amount: 15 },
    { type: 'Czujniki ruchu', amount: 14 },
    { type: 'Czujniki dymu', amount: 6 },
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
