import { ROUTES } from "./routes/constants";
import { Option } from 'components/SelectComponent/types';

export interface PropertyOption extends Option {
    rootUrl: string;
    detailsUrl: string;
}

export const REGION_SELECT_OPTIONS: PropertyOption[] = [
    {
        rootUrl: ROUTES.PATHS.API_ROOT + ROUTES.PATHS.SCRAPPER.FLORIDA.SEARCH,
        detailsUrl: ROUTES.PATHS.API_ROOT + ROUTES.PATHS.SCRAPPER.FLORIDA.DETAILS,
        text: 'Florida',
        id: 0
    },
    {
        rootUrl: ROUTES.PATHS.API_ROOT + ROUTES.PATHS.SCRAPPER.TEXAS.SEARCH,
        detailsUrl: ROUTES.PATHS.API_ROOT + ROUTES.PATHS.SCRAPPER.TEXAS.DETAILS,
        text: 'Texas',
        id: 1
    }
  ];