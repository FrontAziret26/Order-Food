import { createContext, useEffect, useReducer } from "react";
export const CartContext = createContext({
  items: [],
  totalAmount: 0,
});
const cartReducer = (state, action) => {
  if (action.type === "GET_BASKET") {
    return (state = action.payload);
  }
  if (action.type === "ADD") {
    return (state = action.payload);
  }

  if (action.type === "INCREMENT") {
    return (state = action.payload);
  }

  if (action.type === "DECREMENT") {
    return (state = action.payload);
  }
  return state;
};
const CardProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, []);

  const addItem = async (id, amount) => {
    const BASE_URL =
      "http://ec2-35-156-167-238.eu-central-1.compute.amazonaws.com:5500/api/v1";

    const response = await fetch(`${BASE_URL}/foods/${id}/addToBasket`, {
      method: "POST",
      headers: { "Content-Type": "application/json", UserID: "Aziret" },
      body: JSON.stringify({ amount: amount }),
    });
    const data = await response.json();

    dispatch({ type: "ADD", payload: data.items });
  };

  const getBasket = async () => {
    const BASE_URL =
      "http://ec2-35-156-167-238.eu-central-1.compute.amazonaws.com:5500/api/v1";

    const response = await fetch(`${BASE_URL}/basket`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        UserID: "Aziret",
      },
    });

    const data = await response.json();

    dispatch({ type: "GET_BASKET", payload: data.data.items });
  };

  useEffect(() => {
    getBasket();
  }, []);

  const incrementAmountHandler = async (id, amount) => {
    const BASE_URL =
      "http://ec2-35-156-167-238.eu-central-1.compute.amazonaws.com:5500/api/v1";

    const response = await fetch(`${BASE_URL}/basketItem/${id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        UserID: "Aziret",
      },
      body: JSON.stringify({ amount: amount + 1 }),
    });

    const data = await response.json();
    dispatch({ type: "INCREMENT", payload: data.data.items });
  };

  const decrementAmountHandler = async (id, amount) => {
    if (amount !== 0) {
      const BASE_URL =
        "http://ec2-35-156-167-238.eu-central-1.compute.amazonaws.com:5500/api/v1";

      const response = await fetch(`${BASE_URL}/basketItem/${id}/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          UserID: "Aziret",
        },
        body: JSON.stringify({ amount: amount }),
      });

      const data = await response.json();
      dispatch({ type: "DECREMENT", payload: data.data.items });
      getBasket();
    } else {
      const BASE_URL =
        "http://ec2-35-156-167-238.eu-central-1.compute.amazonaws.com:5500/api/v1";

      const response = await fetch(`${BASE_URL}/basketItem/${id}/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          UserID: "Aziret",
        },
        body: JSON.stringify({ amount: amount }),
      });

      const data = await response.json();
      dispatch({ type: "DECREMENT", payload: data.data.items });
    }
  };

  const orderAmount = cartState?.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  const getTotalAmount = () => {
    return cartState?.reduce(
      (sum, { price, amount }) => sum + amount * price,
      0
    );
  };
  const cartValue = {
    // cartItems:
    cartState: cartState,
    totalAmount: orderAmount,
    addItem,
    incrementAmountHandler,
    decrementAmountHandler,
    getTotalAmount,
  };
  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export default CardProvider;
