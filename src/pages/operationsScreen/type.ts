export interface OperationPostResult {
  name: string;
  desc?: string;
  amount: number;
  date: string; // дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
  type: 'Profit' | 'Cost';
  categoryId: string;
}
export interface OperationPostParams {
  operation: OperationPostResult;
}
export interface OperationPutParams extends OperationPostParams {
  id: string;
}
