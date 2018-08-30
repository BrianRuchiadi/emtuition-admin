import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { NotificationService } from '../../services/notification/notification.service';
import { Notification } from '../../classes/notification';

const API_URL = environment.apiUrl;

@Injectable()
export class ErrorHandlerMiddleware implements ErrorHandler {

    constructor(
        private notificationService: NotificationService
    ) {}

    handleError(error: Error | HttpErrorResponse) {
        // check whether it is error from server
        if (error instanceof HttpErrorResponse) {
            // handle server side error
            console.log(['a SERVER side error has been detected', error]);

            if (navigator.onLine) {
                // handle Http errors
            } else {
                // handle offline error
            }
        } else {
            // handle client side error / angular related error
            console.log(['an ANGULAR side error has been detected', error]);
            this.notificationService.add(
                new Notification('error', 'ANGULAR Error : ' + error.stack)
            );
        }
    }
}
