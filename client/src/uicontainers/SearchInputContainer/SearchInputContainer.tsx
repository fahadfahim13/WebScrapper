import React from 'react'
import InputField from 'components/InputField';
import { Button, Grid,  } from '@mui/material';
import { SEARCH } from './types';
import { REGION_SELECT_OPTIONS } from 'shared/constants';
import SelectComponent from 'components/SelectComponent';
import useSearchInputs from './hook';

const SearchInputContainer = () => {
  const { changeRegions, handleChange, search, searchText} = useSearchInputs();
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SelectComponent 
          options={REGION_SELECT_OPTIONS} 
          label={'Select Region: '} 
          handleChange={changeRegions} 
        />
      </Grid>
      <Grid item xs={6}>
        <InputField 
          id={SEARCH.TEXT} 
          name={SEARCH.TEXT} 
          label={'Search Text'}
          value={searchText} 
          onChange={(e) => handleChange(e)} 
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