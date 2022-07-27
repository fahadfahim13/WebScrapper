import { configureStore } from '@reduxjs/toolkit';
import searchCriteriaReducer from './SearchCriterias/reducer';
import searchProperyReducer from './SearchProperties/reducer';

export const store = configureStore({
  reducer: {
    searchCriteria: searchCriteriaReducer,
    searchProperties: searchProperyReducer
  },
});
