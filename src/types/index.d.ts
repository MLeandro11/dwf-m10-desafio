export interface Inputs {
    name: string;
    email: string;
    phone_number: string;
    country: string;
    city: string;
    province: string;
    zip: string;
    street: string;
    address: string;
}
export interface Product {
    objectID: string;
    name: string;
    unit_cost: number;
    description: string;
    images: Array<{
        url: string;
    }>;
}

export interface User {
    name: string;
    email: string;
    phone_number: string;
    country: string;
    city: string;
    province: string;
    zip: string;
    street: string;
    address: string;
}
