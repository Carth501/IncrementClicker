import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ValueActions from './../store/value.actions';
import * as ValueSelectors from './../store/value.selectors';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
})
export class ValueComponent implements OnInit {
  value$: Observable<number>;
  ngOnInit(): void { }

  constructor(private store: Store<ValueSelectors.AppState>) {
    this.value$ = this.store.pipe(select(ValueSelectors.getValue));
  }

  increment(value: number = 1) {
    this.store.dispatch(ValueActions.increment({ value }));
  }

  decrement(cost: number = 1) {
    this.store.dispatch(ValueActions.purchase({ cost }));
  }

  // reset() {
  //   this.store.dispatch(ValueActions.reset());
  // }
}
