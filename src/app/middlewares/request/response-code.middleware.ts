import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';


const API_URL = environment.apiUrl;

@Injectable()
export class ResponseCodeMiddleware implements HttpInterceptor {

    constructor(
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // only when the response is retrieved from own API
        if (request.url.includes(API_URL)) {
            return next.handle(request)
                .pipe(
                    tap(
                        (event: HttpEvent<any>) => {
                            if (event instanceof HttpResponse) {
                                // do something with success response
                            }
                        }, (err: any) => {
                            if (err instanceof HttpErrorResponse) {
                                switch (err.status) {
                                    case 401:
                                        localStorage.removeItem('accessToken');
                                        this.router.navigate(['/login']);
                                        break;
                                    default: break;
                                }
                            }
                        }
                    )
                );
        }
    }
}
