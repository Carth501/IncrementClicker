import { createReducer, on } from '@ngrx/store';
import * as valueActions from './value.actions';

export const initialState: State = {
  value: 0,
  incrementors: 0,
};

export interface State {
  value: number;
  incrementors: number;
}

const _valueReducer = createReducer(
  initialState,
  on(valueActions.increment, (state) => ({ ...state, value: state.value + 1 })),
  on(valueActions.purchase, (state) => ({
    ...state,
    value: state.value - 25,
    incrementors: state.incrementors + 1,
  })),
  on(valueActions.reset, (state) => ({ ...state, value: (state.value = 0) }))
);

export function valueReducer(state: State | undefined, action: any) {
  return _valueReducer(state, action);
}
