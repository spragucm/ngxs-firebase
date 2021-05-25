import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AddTopping } from '../salad-page/salad.actions';
import { SaladState } from '../salad-page/salad.state';

@Component({
  selector: 'app-toppings-list',
  templateUrl: './toppings-list.component.html',
  styleUrls: ['./toppings-list.component.scss']
})
export class ToppingsListComponent implements OnInit {

  choices = [
    'Olives',
    'Tomatoes',
    'Croutons',
    'Pickles',
    'Shrimp',
    'Pepitas',
    'Carrots'
  ];

  @Select(state => state.salad.toppings) toppings$;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  add(name: string) {
    this.store.dispatch(new AddTopping(name));
  }

}
