import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InputChangeAction, Inputs } from './types';
import { SEARCH } from 'uicontainers/SearchInputContainer/types';
import { REGION_SELECT_OPTIONS } from 'shared/constants';

const initialState: Inputs = {
  [SEARCH.TEXT]: '',
  [SEARCH.REGION]: '',
  [SEARCH.URL]: REGION_SELECT_OPTIONS[0].value
};

export const searchCriteriaSlice = createSlice({
  name: 'searchCriterias',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateSearch: (state, action: PayloadAction<InputChangeAction>) => {
      state[action.payload.key] = action.payload.value;
    },
    clearState: (state) => {
      state[SEARCH.TEXT] = '';
      state[SEARCH.REGION] = '';
      state[SEARCH.URL] = '';
    }
  }
});
export default searchCriteriaSlice;
