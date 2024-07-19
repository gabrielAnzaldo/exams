export const fetchProducts = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      console.log("que onda: ", json);
      return json;
    });
};
