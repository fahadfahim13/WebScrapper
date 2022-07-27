import { PropertyDetails } from "shared/types";

export interface Props {
    tableBody?: PropertyDetails[];
    getPropertyDetails: (id: number, detailsUrl: string) => void;
}