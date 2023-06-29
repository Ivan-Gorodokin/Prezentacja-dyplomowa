import { Component, OnInit, signal } from '@angular/core';
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

  public currentIndex = signal<number>(0);

  public scenarios = [
    [
      'za pomocą wyłącznika świateł (monostabilnego);',
      'przy jednoczesnej aktywacji czujników ruchu i światła/w określonych godzinach przy aktywacji czujniku ruchu;',
      'w godzinach nocnych (21:00 – 5:00) gdy wykryto otwarcie drzwi;',
      'przy aktywacji alarmu.',
    ],
    [
      'sterowane z przełącznika (jednym wciśnięciem);',
      'zamykane automatycznie na noc o 23:00 jeśli zamknięto drzwi;',
      'w zależności od alarmów - podnoszą się przy przeciwpożarowym, opuszczają się przy przeciwwłamaniowym.',
    ],
    [
      'sterowanie w zależności od termostatu - aktywne gdy setpoint > temperatury pokojowej;',
      'start od 0 W, co 15 sekund + 10% mocy;',
      'gdy temperatura pokojowa = setpoint powyżej minuty - grzejnik jest wylączany, aktualna moc zostaje;',
      'po 5 minutach moc jest zerowana.',
    ],
    [
      'alarm przeciwpożarowy - aktywacja któregokolwiek z czujników dymu; efekt: aktywacja syreny, włączenie świateł, podnoszenie rolet;',
      'alarm przeciwwłamaniowy - aktywacja (z opóźnieniem 30-sekundowym) od czujników ruchu lub otwarcia drzwi gdy aktywowano alarm z panelu; efekt: aktywacja syreny, włączenie świateł, opuszczenie rolet.',
    ],
  ];
  ngOnInit() {
    const url = this.route.snapshot.url[0].path;
    this.navService.updateStateOnRefresh(url);
  }

  selectedIndexChange(index: number) {
    this.currentIndex.update(() => index);

    console.log(this.currentIndex());
    console.log(this.scenarios[this.currentIndex()]);
  }
}
