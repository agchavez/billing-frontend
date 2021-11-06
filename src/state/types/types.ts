export enum ActionTypes {
    AUTHLOGIN = "[auth] Login",
    AUTHLOGOUT = "[auth] Logout",
    AUTHVALIDATE = "[auth] Validate",

    CLIENTLIST = "[client] List",
    CLIENTADD = "[client] Add",
    CLIENTEDIT = "[client] Edit",
    CLIENTREMOVE = "[client] Remove",
    CLIENTACTIVE = "[client] Active",
    CLIENTINACTIVE = "[client] Inactive",
    
    PRODUCTLIST = "[product] List",
    PRODUCTADD = "[product] Add",
    PRODUCTEDIT = "[product] Edit",
    PRODUCTREMOVE = "[product] Remove",
    PRODUCTACTIVE = "[product] Active",
    PRODUCTINACTIVE = "[product] Inactive",

    INVOICELIST = "[invoice] List",
    INVOICEADD = "[invoice] Add",
    INVOICEEDIT = "[invoice] Edit",
    INVOICEREMOVE = "[invoice] Remove",
    INVOICEACTIVE = "[invoice] Active",
    INVOICELOADING = "[invoice] Loading",
    INVOICECOMPLETE = "[invoice] Complete",

    DISCOUNTACTIVE = "[discount] Active",
    DISCOUNTINACTIVE = "[discount] Inactive",
    DISCOUNTUPDATE = "[discount] Update",
}