import { Injectable } from '@angular/core';

import { Notification } from './../../classes/notification';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
    public notifications = new Subject<Notification>();
    public noteAdded = this.notifications.asObservable();

    public add(notification: Notification) {
        this.notifications.next(notification);
    }
}
