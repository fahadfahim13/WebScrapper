import React, { ChangeEvent, useState } from 'react'
import { SelectChangeEvent } from '@mui/material';
import { SEARCH } from './types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectSearchCriterias } from 'store/SearchCriterias/selectors';
import { updateSearch, updateOption } from 'store/SearchCriterias/actions';
import { getPropertyDetailsAsync, searchPropertyAsync } from 'store/SearchProperties/thunks';
import { REGION_SELECT_OPTIONS } from 'shared/constants';


const useSearchInputs = () => {
  const dispatch = useAppDispatch();
  const searchCriterias = useAppSelector(selectSearchCriterias);
  const [selectedRegion, setSelectedRegion] = useState(REGION_SELECT_OPTIONS[0])

  const changeRegions = (e: SelectChangeEvent) => {
    console.log(e);
    const reg = REGION_SELECT_OPTIONS.find((el) => el.id.toString() === e.target.value)

      dispatch(updateOption(reg ?? REGION_SELECT_OPTIONS[0]));
  }

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    dispatch(updateSearch(e.target.value));
  };

  const search = () => {
    dispatch(searchPropertyAsync({url: searchCriterias[SEARCH.OPTION].rootUrl, searchText: searchCriterias[SEARCH.TEXT]}));
  }

  const getPropertyDetails = (id: number, detailsUrl: string) => {
    dispatch(getPropertyDetailsAsync({id, apiUrl: searchCriterias[SEARCH.OPTION].detailsUrl, detailsUrl}));
  }

  return {
    changeRegions, search, handleChange, searchText: searchCriterias[SEARCH.TEXT], searchOption: searchCriterias[SEARCH.OPTION], getPropertyDetails
  }
}

export default useSearchInputs;