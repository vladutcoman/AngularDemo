import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs-compat/add/operator/switchMap';

import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as fromAuth from '../auth/store/auth.reducers';
import { auth } from '../../../node_modules/firebase';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    // const copiedReq = req.clone({headers: req.headers.set('', '')});
    
    return this.store.select('auth')
      .take(1)
      .switchMap((authState: fromAuth.State) => {
        const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
        return next.handle(copiedReq);
      })
    // return next.handle(copiedReq);
    // return null;
  }
}
