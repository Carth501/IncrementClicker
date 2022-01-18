import { createSelector } from '@ngrx/store';

export interface FeatureState {
  value: number;
}

export interface AppState {
  feature: FeatureState;
}

export const selectFeature = (state: AppState) => state.feature;

export const selectValue = createSelector(
  selectFeature,
  (state: FeatureState) => state.value
);
