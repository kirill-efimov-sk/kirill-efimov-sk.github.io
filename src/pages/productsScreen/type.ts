export interface ProductPostResult {
  name: string;
  photo?: string;
  desc?: string;
  oldPrice?: number;
  price: number;
  categoryId: string;
}
export interface ProductPostParams {
  product: ProductPostResult;
}
export interface ProductPutParams extends ProductPostParams {
  id: string;
}
