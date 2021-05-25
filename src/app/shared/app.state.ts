import { State, Action, StateContext } from "@ngxs/store";
import { OrderService } from "../order.service";
import { ConfirmOrder, OrderFailed, OrderSuccess, SetUsername } from "./app.actions";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

export interface AppStateModel {
  username: string;
  orderId: number;
  status?: 'pending' | 'confirmed' | 'declined';
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    username: '',
    orderId: Math.floor(Math.random() * 23000)
  }
})
@Injectable()
export class AppState {

  constructor(private orderService: OrderService) {}

  @Action(SetUsername)
  setUserName({ patchState }: StateContext<AppStateModel>, { payload }: SetUsername) {
    patchState({ username: payload });
  }

  @Action(ConfirmOrder, { cancelUncompleted: true })
  confirm({ dispatch, patchState }: StateContext<AppStateModel>) {
    patchState({ status: 'pending' });

    return this.orderService.post().pipe(
      tap(success => (success ? dispatch(OrderSuccess) : dispatch(OrderFailed)))
    );
  }

  @Action(OrderSuccess)
  orderSuccess({ patchState }: StateContext<AppStateModel>) {
    patchState({ status: 'confirmed' });
  }

  @Action(OrderFailed)
  orderFailed({ patchState }: StateContext<AppStateModel>) {
    patchState({ status: 'declined' });
  }
}
