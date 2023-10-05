export function getProducts(){
    return fetch('https://react-eatable-api.herokuapp.com/products')
    .then(response => response.json())
    // .then(response => console.log(response))
    .catch(err => console.error(err));
}