export enum BUTTON_TYPES {
    OUTLINED = "outlined",
    TEXT = "text",
    CONTAINED = "contained",
}

export enum BUTTON_COLORS {
    INHERIT = "inherit",
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    ERROR =  "error",
    INFO = "info",
    WARNING = "warning"
}

export enum VERTICAL {
    TOP = "top",
    BOTTOM="bottom",
}

export enum HORIZONTAL {
    CENTER = "center",
    LEFT = "left",
    RIGHT = "right",
}

export interface PropertyAttributes {
    name: string;
    city: string;
    address: string;
    zip: string;
    county: string;
    phone: string;
    type: string;
    capacity: string;
    images: string;
    map: string;
}

export interface Property extends PropertyAttributes {
    id: number | string;
}

export interface PropertyDetails extends PropertyAttributes {
    link: string;
}