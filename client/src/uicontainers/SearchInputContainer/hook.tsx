import React, { ChangeEvent, useState } from 'react'
import { SelectChangeEvent } from '@mui/material';
import { SEARCH } from './types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectSearchCriterias } from 'store/SearchCriterias/selectors';
import { InputChangeAction, InputTypes, StateChangeAction } from 'store/SearchCriterias/types';
import { updateSearch,updateState } from 'store/SearchCriterias/actions';
import { searchPropertyAsync } from 'store/SearchProperties/thunks';
import { REGION_SELECT_OPTIONS } from 'shared/constants';


const useSearchInputs = () => {
  const dispatch = useAppDispatch();
  const searchCriterias = useAppSelector(selectSearchCriterias);
  const [selectedRegion, setSelectedRegion] = useState(REGION_SELECT_OPTIONS[0])

  const changeRegions = (e: SelectChangeEvent) => {
    console.log(e);
    const reg = REGION_SELECT_OPTIONS.find((el) => el.id.toString() === e.target.value)
    setSelectedRegion(reg ?? REGION_SELECT_OPTIONS[0]);
    const payload: StateChangeAction= {
        ...searchCriterias,
        [SEARCH.URL]: e.target.value,
      };
      dispatch(updateState(payload));
  }

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: InputTypes,
  ) => {
    const payload: InputChangeAction = {
      key,
      value: e.target.value,
    };
    dispatch(updateSearch(payload));
  };

  const search = () => {
    dispatch(searchPropertyAsync({url: searchCriterias[SEARCH.URL], searchText: searchCriterias[SEARCH.TEXT]}));
  }

  return {
    changeRegions, search, handleChange, searchText: searchCriterias[SEARCH.TEXT], searchUrl: selectedRegion.id
  }
}

export default useSearchInputs;