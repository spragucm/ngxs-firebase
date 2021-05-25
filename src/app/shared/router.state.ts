import { Action, State, StateContext } from "@ngxs/store";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { OrderService } from "../order.service";

export class Navigate {
  static readonly type = '[router] navigate';
  constructor(public payload: string){}
}

@State<string>({
  name: 'router',
  defaults: ''
})
@Injectable()
export class RouterState {

  constructor(private router: Router) {}

  @Action(Navigate)
  async changeRoute(context: StateContext<string>, action: Navigate) {
    const path = action.payload;
    await this.router.navigate([path]);
    context.setState(path);
  }

  /*
    or listen to an event stream with NgRX Effects

    @Injectable()
    export class RouteHandler {
      constructor(private router: Router, private actions$: Actions) {
        this.actions$
        .pipe(ofAction(Navigate))
        .subscribe(({payload}) => this.router.navigate([payload]))
      }
    }

  */

}
