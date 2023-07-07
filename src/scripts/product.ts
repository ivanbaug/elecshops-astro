import { apiUrl } from "../config";
import { $tableQueryParams, $loadingTable, TableQueryParams, $networkError } from "../stores/tableQueryParamsStore";

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
    $loadingTable.set(true);
    const tqp = $tableQueryParams.get();
    let typedResponse:  ProductResponseData = {
      data: [],
      page: 0,
      per_page: 0,
      page_qty: 0,
      total: 0,
    };
    try {
      const response = await fetch(apiUrl + '/products/' + buildQueryString(tqp));
      typedResponse = await response.json() as ProductResponseData;
      $networkError.set(false);
    } catch (error) {    
      $networkError.set(true);
    }
    $loadingTable.set(false);
    return typedResponse; 
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