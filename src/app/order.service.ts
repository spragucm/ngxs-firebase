import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  post() {
    return of(Math.random() >= 0.5).pipe(delay(2000));
  }
}
