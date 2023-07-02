import { map } from "nanostores";

export interface PaginationData {
    page: number;
    per_page: number;
    page_qty: number;
    total: number;
}

export const $paginationData = map<PaginationData> ({
    page: 0,
    per_page: 0,
    page_qty: 0,
    total: 0,
})
