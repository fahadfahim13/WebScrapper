import { ROUTES } from "./routes/constants";
import { Option } from 'components/SelectComponent/types';

export const REGION_SELECT_OPTIONS: Option[] = [
    {
        value: ROUTES.PATHS.API_ROOT + ROUTES.PATHS.SCRAPPER.FLORIDA.SEARCH,
        text: 'Florida',
        id: 0
    },
    {
        value: ROUTES.PATHS.API_ROOT + ROUTES.PATHS.SCRAPPER.TEXAS.SEARCH,
        text: 'Texas',
        id: 1
    }
  ];