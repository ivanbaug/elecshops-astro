import { map } from 'nanostores'

export interface TableQueryParams {
    query: string;
    instock: string;
    order_by: string;
    sort: string;
    page: number;
    per_page: number;
}

export const $tableQueryParams = map<TableQueryParams>({
    query: '',
    instock: '',
    order_by: '',
    sort: '',
    page: 0,
    per_page: 0,
});