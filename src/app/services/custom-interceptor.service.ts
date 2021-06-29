import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('intercept');
    console.log(req.url);
    let clone = req.clone(
      {
        // url: 'https://jsonplaceholder.typicode.com/users/10'
        url: 'https://jsonplaceholder.typicode.com/posts',
        params: req.params.set('userId', 1),
        headers: new HttpHeaders({'Authorization': 'Bearer yourToken'}),
        responseType: 'text'
      }
    );
    console.log(clone.url);
    return next.handle(clone);
  }
}
