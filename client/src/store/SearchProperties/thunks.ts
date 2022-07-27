import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchProperties, fetchPropertyDetails } from 'api/property';


export const searchPropertyAsync = createAsyncThunk('searchProperties/fetchProperties', async (props: {url: string, searchText: string}) => {
    const { url, searchText } = props;
    const response = await fetchProperties(url, searchText);
    return response.data;
});


export const getPropertyDetailsAsync = createAsyncThunk('searchProperties/getPropertyDetails', async (props: {id: number, apiUrl: string, detailsUrl: string}) => {
    const { apiUrl, detailsUrl, id } = props;
    const response = await fetchPropertyDetails(apiUrl, detailsUrl);
    return {id, data: response.data};
});

