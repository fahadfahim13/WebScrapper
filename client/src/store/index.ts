import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/reducer';
import formReducer from './FormInputs/reducer';
import auditLogsReducer from './AuditLogs/reducer';
import alertReducer from './Alert/reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    formReducer: formReducer,
    auditLogs: auditLogsReducer,
    alertProp: alertReducer,
  },
});
