import { Detail } from 'types/Detail';

/* --- STATE --- */
export interface DetailsState {
  isLoading: boolean;
  error?: string;
  details: Detail[];
}
