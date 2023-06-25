import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent {
  public ProgramsData = [
    [
      {
        cardTitle: 'Realgames Home I/O',
        imgSrc: '../../../assets/Home IO.png',
        cardText:
          'Trójwymiarowy symulator inteligentnego domu jednorodzinnego wraz z otaczającym terenem wyposażony w 174 urządzenia takie jak: oświetlenie, rolety, grzejniki, termostaty, czujniki, alarmy i in.',
      },
      {
        cardTitle: 'Beckhoff TwinCAT3',
        imgSrc: '../../../assets/bhf_twincat_2013.png',
        cardText:
          'Soft PLC na bazie zasobów sprzętowych komputera PC pozwalające na tworzenie, edycję i uruchomienie programów automatyki zgodnych ze standardem IEC 61131-3.',
      },
    ],

    [
      {
        cardTitle: 'Kepware KEPServerEXv6',
        imgSrc: '../../../assets/kepserver.jpeg',
        cardText:
          'Serwer OPC wyposażony w liczne sterowniki komunikacyjne dla integracji sprzętu większości wiodących producentów urządzeń automatyki w spójny system sterowania.',
      },
      {
        cardTitle: 'OPC DA',
        imgSrc: '../../../assets/OPC.png',
        cardText:
          'Jeden ze standardów komunikacji w branży automatyki i kontroli procesów, służący do wymiany danych pomiędzy różnymi systemami i urządzeniami',
      },
    ],
  ];
}
