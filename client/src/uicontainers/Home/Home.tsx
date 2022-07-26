import React from 'react';

import { Box } from '@mui/material';

import AuditLogsContainer from 'uicontainers/AuditLogsContainer';
import ButtonContainer from 'uicontainers/ButtonContainer';
import FormInputs from 'uicontainers/FormInputs';
import AlertContainer from 'uicontainers/AlertContainer';
import styles from './Home.module.scss';

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
      <AlertContainer />
      <ButtonContainer />
      <FormInputs />
      <AuditLogsContainer />
    </Box>
  );
};

export default Home;
