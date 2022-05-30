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
  
  export interface KeyValue<TKey, TValue> {
    key: TKey;
    value: TValue;
  }
  
  export interface ApiResponse<T> {
    data: T;
  }
  
  export interface ModelResponse<T> {
    id: number,
    type: string;
    attributes: T;
    relationships: any;
  }