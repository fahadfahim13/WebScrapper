import { SelectChangeEvent } from "@mui/material";
import { PropertyOption } from "shared/constants";

export interface Option{
    id: number;
    text: string;
}

export interface Props {
    options: Option[];
    handleChange: (e: SelectChangeEvent) => void;
    label?: string;
}