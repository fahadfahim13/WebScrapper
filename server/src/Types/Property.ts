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