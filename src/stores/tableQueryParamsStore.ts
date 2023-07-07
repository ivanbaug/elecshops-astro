import { map, atom } from 'nanostores'

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

export const $loadingTable = atom(false);
export const $networkError = atom(false);

export function searchString(q: string){
    let current = $tableQueryParams.get();
    if (current.query !== q) {
        current.page = 1;
        $tableQueryParams.set(current); // dont need to get changed key value in this case
        $tableQueryParams.setKey('query', q); // listener gets changed key value
    }
}

export function setTableOrder(orderBy:string) {
    let current = $tableQueryParams.get();
    current.page = 1;
    if (current.order_by === orderBy) {
        $tableQueryParams.set(current);
        $tableQueryParams.setKey('sort', current.sort === 'asc' ? 'desc': 'asc');
    } else {
        current.sort = 'asc';
        $tableQueryParams.set(current);
        $tableQueryParams.setKey('order_by', orderBy);
    }
}