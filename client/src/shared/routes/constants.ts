const ROOT = '/';
const HOME = '/home';

export const ROUTES = {
  PATHS: {
    ROOT,
    HOME,
    API_ROOT: 'http://localhost:4000/api/v1',
    PROPERTY: {
      SEARCH: '/property/search',
      CREATE: '/property/create',
      GET:{
          DETAILS: '/property/get',
          ALL: '/property/get-all'
      }
  },
  SCRAPPER:{
      TEXAS:{
          SEARCH: '/scrapper/texas/search',
          DETAILS: '/scrapper/texas/details'
      },
      FLORIDA: {
          SEARCH: '/scrapper/florida/search',
          DETAILS: '/scrapper/florida/details'
      }
  }
  }
};