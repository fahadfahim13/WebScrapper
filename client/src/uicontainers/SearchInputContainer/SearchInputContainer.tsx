import React, { ChangeEvent } from 'react'
import InputField from 'components/InputField';
import { Button, Grid, SelectChangeEvent } from '@mui/material';
import { SEARCH } from './types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectSearchCriterias } from 'store/SearchCriterias/selectors';
import { InputChangeAction, InputTypes } from 'store/SearchCriterias/types';
import { updateSearch } from 'store/SearchCriterias/actions';
import SelectComponent from 'components/SelectComponent';
import { REGION_SELECT_OPTIONS } from 'shared/constants';
import { searchPropertyAsync } from 'store/SearchProperties/thunks';

const SearchInputContainer = () => {
  const dispatch = useAppDispatch();
  const searchCriterias = useAppSelector(selectSearchCriterias);

  const changeRegions = (e: SelectChangeEvent) => {
    const payload: InputChangeAction = {
        key: SEARCH.URL,
        value: e.target.value,
      };
      dispatch(updateSearch(payload));
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

  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <SelectComponent options={REGION_SELECT_OPTIONS} label={'Select Region: '} value={searchCriterias[SEARCH.URL]} handleChange={changeRegions} />
        </Grid>
      <Grid item xs={6}>
        <InputField 
          id={SEARCH.TEXT} 
          name={SEARCH.TEXT} 
          label={'Search Text'}
          value={searchCriterias[SEARCH.TEXT]} 
          onChange={(e) => handleChange(e, SEARCH.TEXT)} 
        />
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={3}>
        <Button variant="contained" size="large" onClick={search}>Search</Button>
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  )
}

export default SearchInputContainer;