import { Component, OnInit } from '@angular/core';
import { Classes } from './../../../classes/classes';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['../../../styles/pages/_classes.scss']
})
export class ClassesComponent implements OnInit {
  public dummyClasses: Array<Classes> = [
    new Classes('English', 100000, 'active', true, false, true, false, true, false, false, '00.00', '01.30'),
    new Classes('EM 04', 100000, 'active', true, false, true, false, true, false, false, '00.00', '01.30'),
    new Classes('EM 05', 100000, 'active', true, false, true, false, true, false, false, '00.00', '01.30'),
    new Classes('Kelas MTK', 100000, 'active', true, false, true, false, true, false, false, '00.00', '01.30'),
    new Classes('Kelas MTK', 100000, 'active', true, false, true, false, true, false, false, '00.00', '01.30'),
    new Classes('Kelas Mandarin', 100000, 'active', true, false, true, false, true, false, false, '00.00', '01.30'),
    new Classes('Kelas Mandarin', 100000, 'active', true, false, true, false, true, false, false, '00.00', '01.30'),
    new Classes('Kelas Mandarin', 100000, 'active', true, false, true, false, true, false, false, '00.00', '01.30'),
  ];

  constructor() { }

  ngOnInit() {
    console.log(['dummy classes', this.dummyClasses]);
  }

}
