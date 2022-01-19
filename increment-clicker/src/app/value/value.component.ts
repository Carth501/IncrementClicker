import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
})
export class ValueComponent implements OnInit {
  //value$: Observable<number>;
  value: number;
  ngOnInit(): void {}

  constructor(private store: Store<{ value: number }>) {
    this.value = 0;
    //this.value$ = this.store.select(ValueSelectors.selectValue);
  }

  increment(addition: number = 1) {
    this.value += addition;
    //this.store.dispatch(ValueActions.increment());
  }

  decrement(cost: number) {
    this.value -= cost;
    //this.store.dispatch(ValueActions.increment());
  }

  // reset() {
  //   this.store.dispatch(ValueActions.reset());
  // }
}
