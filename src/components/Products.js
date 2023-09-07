import React from 'react';

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '80%',
      }}
    >
      {products.map((prod) => (
        <div
          key={prod.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 10,
            backgroundColor: '#ececec',
            padding: 10,
            width: '30%',
          }}
        >
          <img
            src={prod.thumbnail}
            alt={prod.title}
            style={{ height: 200, objectFit: 'cover' }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: 10,
            }}
          >
            <span>{prod.title}</span>
            <b>{prod.price}</b>
          </div>

          {cart.some((p) => p.id === prod.id) ? (
            <button
              style={{
                padding: 10,
                backgroundColor: '#e53935',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 5,
              }}
              onClick={() =>
                dispatch({ type: 'REMOVE_FROM_CART', payload: prod })
              }
            >
              Remove from cart
            </button>
          ) : (
            <button
              style={{
                marginBottom: 10,
                padding: 10,
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 5,
              }}
              onClick={() =>
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    thumbnail: prod.thumbnail,
                    qty: 1,
                    price: prod.price,
                  },
                })
              }
            >
              Add to cart
            </button>
          )}
        </div>
      ))}
      ;
    </div>
  );
};

export default Products;
