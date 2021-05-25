import { state } from '@angular/animations';
import { State, Action, StateContext, Select, Selector, Store } from '@ngxs/store';
import { AppState, AppStateModel  } from '../shared/app.state';
import { AddTopping, StartOver } from './salad.actions';

export interface SaladStateModel {
  dressing: string;
  price: number;
  toppings: string[];
}

const defaults: SaladStateModel = {
  dressing: 'ranch',
  price: 9.99,
  toppings: []
};

@State<SaladStateModel>({
  name: 'salad',
  defaults
})
export class SaladState {

  @Selector()
  static getDressing(state: SaladStateModel) {
    return state.dressing;
  }

  @Action(AddTopping)
  addTopping(context: StateContext<SaladStateModel>, action: AddTopping) {
    const current = context.getState();

    const toppings = [...current.toppings, action.payload];

    context.patchState({
      toppings,
      price: current.price + 0.5
    });
  }

  @Action(StartOver)
  reset({ setState }: StateContext<SaladStateModel>) {
    setState({ ...defaults });
  }
}

