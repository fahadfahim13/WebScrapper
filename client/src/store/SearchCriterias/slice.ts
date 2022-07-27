import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Inputs } from './types';
import { SEARCH } from 'uicontainers/SearchInputContainer/types';
import { PropertyOption, REGION_SELECT_OPTIONS } from 'shared/constants';

const initialState: Inputs = {
  [SEARCH.TEXT]: '',
  [SEARCH.OPTION]: REGION_SELECT_OPTIONS[0]
};

export const searchCriteriaSlice = createSlice({
  name: 'searchCriterias',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateSearch: (state, action: PayloadAction<string>) => {
      state[SEARCH.TEXT] = action.payload;
    },
    updateOption: (state, action: PayloadAction<PropertyOption>) => {
      state[SEARCH.OPTION] = action.payload;
    },
    clearState: (state) => {
      state[SEARCH.TEXT] = '';
      state[SEARCH.OPTION] = REGION_SELECT_OPTIONS[0];
    }
  }
});
export default searchCriteriaSlice;
