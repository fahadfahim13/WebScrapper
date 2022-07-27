import axios from 'axios';

export const fetchProperties = async (url: string, searchText: string) => {
    const data = await axios.post(url, {
        search: searchText
    });
    return data;
  }
  

  export const fetchPropertyDetails = async (apiUrl: string, detailsUrl: string) => {
    const data = await axios.post(apiUrl, {
        url: detailsUrl
    });
    return data;
  }
  