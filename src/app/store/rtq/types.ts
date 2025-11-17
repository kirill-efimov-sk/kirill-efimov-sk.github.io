//General
export type Filters = {
  name?: string;
  ids?: string[];
  categoryIds?: string[];
  pagination?: {
    pageSize?: number;
    pageNumber?: number;
  };
  createdAt?: {
    gte?: string; // от - дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
    lte?: string; // до - дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
  };
  updatedAt?: {
    gte?: string; // от - дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
    lte?: string; // до - дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
  };
  sorting?: {
    type: 'ASC' | 'DESC';
    field: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'date';
  };
};

//Products
export interface ProductPostData {
  id: string;
  name: string;
  photo?: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  categoryId: string;
  updatedAt: string;
  category: {
    id: string;
    name: string;
  };
}
export interface ProductPostParams {
  product: ProductPostData;
}
export interface ProductPutParams {
  id: string;
  formData: FormData;
}

//Category
export type CategoryPutParams = ProductPutParams;
export type CategoryPostData = {
  id: string;
  name: string;
  photo?: string;
};

//Auth
export interface AuthResult {
  token: string;
}
export interface AuthPostData {
  email: string;
  password: string;
}

//Files
export interface FilePostData {
  url: string;
}
