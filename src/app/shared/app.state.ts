import { State, Action, StateContext } from "@ngxs/store";
import { OrderService } from "../order.service";
import { SetUsername } from "./app.actions";
import { Injectable } from "@angular/core";

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
}
