import type { TableQueryParams } from "../stores/tableQueryParamsStore";
import { apiUrl } from "../config";
import { $tableQueryParams } from "../stores/tableQueryParamsStore";

export interface Product {
    url: string;
    sku: string;
    description: string;
    stock: number;
    price:number;
    id_store: number;
    last_update: Date;
    num_updates: number;
    store_name: string;
    country: string;
}

export interface ProductResponseData {
    data: Product[];
    page: number;
    per_page: number;
    page_qty: number;
    total: number;
}

async function getProductData() {    
    const tqp = $tableQueryParams.get();
    const response = await fetch(apiUrl + '/products/' + buildQueryString(tqp))
    return await response.json() as ProductResponseData; 
}

function buildQueryString(tqp: TableQueryParams) : string {
    let qArray : string[] = [];
    for (let [key, value] of Object.entries(tqp)) {
      if(value){
        qArray.push(key+'='+value);
      }
    }
    return qArray.length > 0 ? '?'+qArray.join('&') : '';
}

export { getProductData };