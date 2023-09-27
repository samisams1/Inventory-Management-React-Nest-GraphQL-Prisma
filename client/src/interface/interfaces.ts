export interface userInterface {
    id?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    role?: string;
    password:string;
    status:string;
  }
  export interface categoryInterface {
    id?: number;
    name?: string;
  }
  export interface pharmayInterface {
    id?: string;
    symptoms?: string;
    diagosis?: string;
    checkUpDate?: string;
    nextvist?: string;
    doctor?: number;
    patient?: number;

  }
  export interface  orderInteface {
    id:number;
    status:string;
    sellerId:number;
    totalQuantity:number;
    createdAt:Date;
    seller:userInterface;
    orderDetails:{
      quantity:number;
      product:productInterface;
    }
  }
  export interface productInterface {
    id?: string;
    name?: string;
    price?: string;
    barcode?: string;
    description?: string;
    image?:string;
    expire_date?:string;
    category?:categoryInterface;
    categoryId?:string;

   // sales?: SaleInterface;
   // supplier: supplierIiiinterface;
  }


  export interface purchaseInterface {
    id?: string;
    quantity:string;
    store:storeInterface;
    product:productInterface;
    storeId:number;
    productId:number
  }
  export interface storeInterface {
    id?: string;
    product:productInterface;
    quantity:number;
  }
  export interface SaleInterface {
    id?: string;
    quantity:string;
    user:userInterface;
    product:productInterface;
    store:storeInterface;
  }
  export interface roleInterface {
    id?: string;
    name?: string;
  }
  export interface LoginValues {
    email: string
    password: string
  }