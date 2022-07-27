import { SelectChangeEvent } from "@mui/material";

export interface Option{
    value: string;
    text: string;
}

export interface Props {
    options: Option[];
    handleChange: (e: SelectChangeEvent) => void;
    value: any;
    label?: string;
}