import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from '../../../services/notification/notification.service';
import { Notification } from '../../../classes/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['../../../styles/common/_notification.scss']
})
export class NotificationComponent implements OnInit {
  public notes: Notification[] = [];

  constructor(
    private notificationService: NotificationService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.subscribeNotification();
  }

  public subscribeNotification() {
    return this.notificationService.noteAdded.subscribe(
      note => {
        this.notes.push(note);

        this.cdr.detectChanges();

        if (note.type !== 'error') {
          setTimeout(() => {
            this.dismissNotification(note);
          }, 4000);
          return;
        }
        console.log(['error coming', note]);
      }
    );
  }

  private dismissNotification(note) {
    const index = this.notes.indexOf(note);

    if (index >= 0) {
      this.notes.splice(index, 1);
      this.cdr.detectChanges();
    }
  }

}
