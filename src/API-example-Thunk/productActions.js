//Example of fetching data with Redux using Thunk
//Asssume a backend API that responds to GET /products
export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsBegin());
    return fetch('/products')
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchProductsSuccess(json.products));
        return json.products;
      })
      .catch((error) => dispatch(fetchProductsFailure(error)));
  };
};

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = () => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { error },
});

export const fetchProductsFailure = () => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error },
});
