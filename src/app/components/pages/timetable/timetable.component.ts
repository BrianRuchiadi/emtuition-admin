import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['../../../styles/pages/_timetable.scss']
})
export class TimetableComponent implements OnInit {
  public timetable: any = [
    {'time': '09.00 - 09.30', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '09.30 - 10.00', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '10.00 - 10.30', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '10.30 - 11.00', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '11.00 - 11.30', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '11.30 - 12.00', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '12.00 - 12.30', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '12.30 - 13.00', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '13.00 - 13.30', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '13.30 - 14.00', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '14.00 - 14.30', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '14.30 - 15.00', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '15.00 - 15.30', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '15.30 - 16.00', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '16.00 - 16.30', 'monday': {'exist': true, 'class': 'mandarin'}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': true, 'class': 'mandarin'}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': true, 'class': 'mandarin'}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '16.30 - 17.00', 'monday': {'exist': true, 'class': 'mandarin'}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': true, 'class': 'mandarin'}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': true, 'class': 'mandarin'}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '17.00 - 17.30', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '17.30 - 18.00', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '18.00 - 18.30', 'monday': {'exist': true, 'class': 'mandarin'}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': true, 'class': 'mandarin'}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': true, 'class': 'mandarin'}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '18.30 - 19.00', 'monday': {'exist': true, 'class': 'mandarin'}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': true, 'class': 'mandarin'}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': true, 'class': 'mandarin'}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '19.00 - 19.30', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}},
    {'time': '19.30 - 20.00', 'monday': {'exist': false, 'class': ''}, 'tuesday': {'exist': false, 'class': ''}, 'wednesday': {'exist': false, 'class': ''}, 'thursday': {'exist': false, 'class': ''}, 'friday': {'exist': false, 'class': ''}, 'saturday': {'exist': false, 'class': ''}, 'sunday': {'exist': false, 'class': ''}}
  ]
  constructor() { }

  ngOnInit() {
    console.log(['timetable', this.timetable]);
  }

}
