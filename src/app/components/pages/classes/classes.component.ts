import { Component, OnInit } from '@angular/core';
import { Classes } from './../../../classes/classes';
import { sortTable } from './../../../functions/datatable';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['../../../styles/pages/_classes.scss']
})
export class ClassesComponent implements OnInit {
  public dummyClasses: Array<Classes> = [
    new Classes('English', 100000, 'active', true, false, true, false, true, false, false, '00.00', '01.30'),
    new Classes('EM 04', 100000, 'active', false, false, true, false, true, false, false, '00.00', '01.30'),
    new Classes('EM 05', 100000, 'active', true, false, true, false, true, false, false, '00.00', '01.30'),
    new Classes('Kelas MTK', 100000, 'active', false, false, true, false, true, false, false, '00.00', '01.30'),
    new Classes('Kelas MTK', 100000, 'active', true, false, true, false, true, false, false, '00.00', '01.30'),
    new Classes('Kelas Mandarin', 100000, 'active', true, false, true, false, true, false, false, '00.00', '01.30'),
    new Classes('Kelas Mandarin', 100000, 'active', true, false, true, false, true, false, false, '00.00', '01.30'),
    new Classes('Kelas Mandarin', 100000, 'active', true, false, true, false, true, false, false, '00.00', '01.30'),
  ];
  public classesSortStatus: any = {
    name: '',
    isMonday: '',
    isTuesday: '',
    isWednesday: '',
    isThursday: '',
    isFriday: '',
    isSaturday: '',
    isSunday: '',
    timeStart: '',
    timeEnd: ''
  };

  constructor(
  ) { }

  ngOnInit() {
    console.log(['dummy classes', this.dummyClasses]);
  }

  sortData(attributes) {
    sortTable(
      this.dummyClasses,
      attributes,
      this.classesSortStatus
    );
  }

}
