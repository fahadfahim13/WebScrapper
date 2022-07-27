import { PropertyDetails } from "shared/types";

export interface SearchPropertyState{
    status: 'idle' | 'loading' | 'success',
    data: PropertyDetails[];
}