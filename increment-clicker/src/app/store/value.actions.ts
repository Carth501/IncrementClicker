import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment',
  props<{ value: number }>()
);
export const purchase = createAction(
  '[Counter Component] Purchase',
  props<{ cost: number }>()
);
export const reset = createAction('[Counter Component] Reset');
