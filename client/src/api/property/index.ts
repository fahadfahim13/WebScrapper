import axios from 'axios';

export const fetchProperties = async (url: string, searchText: string) => {
    const data = await axios.post(url, {
        search: searchText
    });
    return data;
  }
  