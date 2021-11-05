export interface LoginResponse {
    user:  User;
    token: string;
}

export interface User {
    id:         number;
    first_name: string;
    last_name:  string;
}

export interface ListClientResponse {
    count:    number;
    next:     null | string;
    previous: null | string;
    results:  ClientInterface[];
}

export interface ClientInterface {
    id:      number;
    name:    string;
    rtn:     string;
    created: Date;
}

export interface ListProductResponse {
    count:    number;
    next:     null | string;
    previous: null | string;
    results:  ProductInterface[];
}

export interface ProductInterface {
    id:          number;
    name:        string;
    price:       number;
    amount:      number;
    code:        string;
    description: null;
    status:      boolean;
    created:     Date;
}
