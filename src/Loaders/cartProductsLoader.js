import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();
//   console.log(products);

  // if cart data is in database, then have to use async await

  const storedCart = getShoppingCart();

  const savedCart = [];

  for (const id in storedCart) {
    const addedProduct = products.find(pd => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  // if we need to send two things together can follow 2 ways:
  // 1. return [products, savedCart]
  // or
  // 2. return {products, cart: savedCart}

  return savedCart;
};

export default cartProductsLoader;
