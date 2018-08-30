import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../styles/common/_header.scss']
})
export class HeaderComponent implements OnInit {
  public wrapperSelector: any;
  public isContentExpanded: boolean = false;

  constructor() { }

  ngOnInit() {
    this.wrapperSelector = document.querySelector('.wrapper');
  }

  public toggleContentStatus() {
    if (!this.isContentExpanded) {
      this.wrapperSelector.classList.add('expanded');
    } else {
      this.wrapperSelector.classList.remove('expanded');
    }

    this.isContentExpanded = !this.isContentExpanded;
  }

}
