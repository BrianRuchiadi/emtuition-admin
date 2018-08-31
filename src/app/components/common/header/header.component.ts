import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../styles/common/_header.scss']
})
export class HeaderComponent implements OnInit {
  public wrapperSelector: any;
  public isContentExpanded: boolean = false;
  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.innerWidth = window.innerWidth;
      
      if (this.innerWidth < 1000) {
        this.wrapperSelector.classList.add('expanded');
        this.isContentExpanded = true;
      }
    }

  constructor() { }

  ngOnInit() {
    this.wrapperSelector = document.querySelector('.wrapper');
    this.innerWidth = window.innerWidth;
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
