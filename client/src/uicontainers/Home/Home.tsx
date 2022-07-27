import React from 'react';

import { Box } from '@mui/material';
import styles from './Home.module.scss';
import SearchInputContainer from 'uicontainers/SearchInputContainer';
import PropertyTableContainer from 'uicontainers/PropertyTableContainer';
import DataSpinner from 'uicontainers/DataSpinner';

const Home = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        bgcolor: 'background.paper',
      }}
      noValidate
      autoComplete="off"
      className={styles.box}
    >
      <DataSpinner />
      <SearchInputContainer />
      <hr />
      <PropertyTableContainer />
    </Box>
  );
};

export default Home;
