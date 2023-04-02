export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: 'asc' | 'desc';

  [key: string]: any;
}

export interface OrderProps {
  key: number;
  id: number;
  title: string;
  quantity: number;
  price: number;
}

export interface InventoryProps {
  key: number;
  id: number;
  title: string;
  price: number;
}

export interface CustomersProps {
  key: number;
  id: number;
  title: string;
}

export interface CardProps {
  icon?: React.ReactNode;
  title?: string;
  value?: any;
}
