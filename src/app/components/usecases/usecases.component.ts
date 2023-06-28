import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-usecases',
  templateUrl: './usecases.component.html',
  styleUrls: ['./usecases.component.scss'],
})
export class UsecasesComponent implements OnInit {
  public columns = [
    {
      title: 'Studia techniczne kierunku AiR',
      text: [
        `młodsze roczniki (1-4 semestr) - laboratoria z podstaw programowania PLC, logiki stosowanej w automatyce, projektowania systemów automatyki; przedmioty dotyczące automatyki budynkowej;`,
        `starsze roczniki - w ćwiczeniach dotyczących protokołów komunikacji.`,
      ],
    },
    {
      title: 'Wykształcenie średnie',
      text: [
        `w zajęciach zapoznawczych z koncepcjami automatyki;`,
        `jako narzędzie interaktywne do celów rekrutacji na uczelnie techniczne.`,
      ],
    },
    {
      title: 'Prywatne kursy z automatyki ',
      text: [
        `narzędzie do ćwiczeń w celu dostarczenia praktycznej wiedzy podstawowej z którą osoba będzie miała styczność w pracy codziennej`,
      ],
    },
    {
      title: 'Ekspresowe kształcenie wewnątrz firmy ',
      text: [
        'ćwiczenia w zakresie własnym w ramach szkoleń przygotowujących do automatyzacji domów jednorodzinnych z użyciem technologii OPC/Modbus.',
      ],
    },
    {
      title: 'Kształcenie specjalistów na podstawie programowania klasycznego',
      text: [
        'tworzenie systemów sterowania sterowanych przez zwykły komputer  PC i programy napisane w „klasycznych” językach programowania (np. C++, Java).',
      ],
    },
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
