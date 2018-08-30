import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class RequestTokenMiddleware implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // only when the request is performed to own API
        if (request.url.includes(API_URL)) {
            const requestPath = request.url.replace(API_URL, '');

            switch (requestPath) {
                case '/login':
                case '/register':
                    break;
                default:
                    const accessToken = localStorage.getItem('accessToken');
                    const setAuthorizationHeader = {
                        setHeaders: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    };

                    request = request.clone(setAuthorizationHeader);
            }
        }

        return next.handle(request);
    }
}
