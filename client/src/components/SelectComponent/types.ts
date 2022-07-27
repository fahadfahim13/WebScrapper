import { SelectChangeEvent } from "@mui/material";

export interface Option{
    id: number;
    value: string;
    text: string;
}

export interface Props {
    options: Option[];
    handleChange: (e: SelectChangeEvent) => void;
    value: Option;
    label?: string;
}