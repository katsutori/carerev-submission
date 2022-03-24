import { CountriesState } from 'app/containers/Countries/types';
import { DetailsState } from 'app/containers/Details/types'
import { ThemeState } from 'styles/theme/types';

export interface RootState {
  theme?: ThemeState;
  countries?: CountriesState;
  details?: DetailsState;
}
