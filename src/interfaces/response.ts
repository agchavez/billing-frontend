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
    created: Date | null;
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
    description?: null;
    status:      boolean;
    created:     Date | null;
}

//Invoice
export interface ListInvoiceResponse {
    count:    number;
    next:     null;
    previous: null;
    results:  InvoiceInterface[];
}

export interface InvoiceInterface {
    id:             number;
    total:          number;
    invoice_detail: InvoiceDetail[];
    client:         number | null;
    client_name:    ClientInterface;
    seller:         number;
    isv:            number;
    discount:       number | null;
    status:         boolean;
    created:        Date;
}

export interface DiscountResponse {
    id:       number;
    describe: string;
    discount: number;
    code:     string;
    duration: Date;
    status:   boolean;
}


export interface InvoiceDetail {
    id:         number;
    total_line: number;
    invoice:    number;
    product:    number;
    amount:     number;
}

export interface InvoiceDetailBilling {
    total_line: number;
    product:    number;
    amount:     number;
    price:      number;
    name:       string;
    code:        string;
}

