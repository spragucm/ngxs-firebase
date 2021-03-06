import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetUsername, ConfirmOrder } from './shared/app.actions';
import { AppState } from './shared/app.state';
import { Navigate } from './shared/router.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxs-firebase';

  state$: Observable<AppState>;

  constructor(private store: Store) {
    this.state$ = this.store.select(state => state);
  }

  onClick(username: string) {
    console.log(username);
    this.store.dispatch([
      new SetUsername(username),
      new Navigate('salad/order')
    ]);
  }

  confirm() {
    this.store.dispatch(ConfirmOrder);
  }
}
