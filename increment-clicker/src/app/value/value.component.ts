import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ValueActions from '../store/value.actions';
import * as ValueSelectors from '../store/value.selectors';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
})
export class ValueComponent implements OnInit {
  value$: Observable<number>;

  ngOnInit(): void {}

  constructor(private store: Store<{ value: number }>) {
    this.value$ = this.store.select(ValueSelectors.selectValue);
  }

  increment() {
    this.store.dispatch(ValueActions.increment());
  }

  purchase() {
    this.store.dispatch(ValueActions.purchase({ cost: 25 }));
  }

  reset() {
    this.store.dispatch(ValueActions.reset());
  }
}
