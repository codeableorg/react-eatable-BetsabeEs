import apiFetch from "./api-fetch";

export function showProducts(id){
    return apiFetch(`/products/${id}`);
}

export function getProducts(){
  return apiFetch("/products");
}

export function createProducts(productData) {
    return apiFetch("/products", { body: productData })
}

export function deleteProducts(id) {
    return apiFetch(`/products/${id}`, { method: "DELETE" });
}

export  function updateProducts(
    id,
    data 
  ) {
    const product =  apiFetch(`/products/${id}`, { body: data, method: "PATCH" });
    return product;
  }