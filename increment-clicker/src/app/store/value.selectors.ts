import { createSelector } from '@ngrx/store';

export interface FeatureState {
  value: number;
}

export interface AppState {
  feature: FeatureState;
}

export const selectFeature = (state: AppState) => state.feature;

const selectValue = (state: any) => state.hasOwnProperty('value') ? state.value : 0;

export const getValue = createSelector(
  selectValue,
  (state: FeatureState) => state.value
);
