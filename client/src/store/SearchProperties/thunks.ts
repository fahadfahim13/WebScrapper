import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchProperties } from 'api/property';


export const searchPropertyAsync = createAsyncThunk('searchProperties/fetchProperties', async (props: {url: string, searchText: string}) => {
    const { url, searchText } = props;
    const response = await fetchProperties(url, searchText);
    return response.data;
});

