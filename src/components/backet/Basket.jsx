import React, { useContext } from "react";
import { Modal } from "../UI/Modal";
import { DUMMY_ITEMS } from "../utils/constants";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
import styled from "styled-components";
import { CartContext } from "../../store/cart-context";

export const Basket = ({ onToggle }) => {
  const { cartItems, getTotalAmount } = useContext(CartContext);

  return (
    <Modal onClose={onToggle}>
      <Content>
        {DUMMY_ITEMS.length ? (
          <FixedWidthContainer>
            {cartItems.map((item) => (
              <BasketItem
                title={item.title}
                price={item.price}
                amount={item.amount}
                id={item.id}
                key={item.id}
              />
            ))}
          </FixedWidthContainer>
        ) : null}

        <TotalAmount totalPrice={getTotalAmount()} onClose={onToggle} />
      </Content>
    </Modal>
  );
};
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

const FixedWidthContainer = styled.div`
  max-height: 250px;
  overflow-y: auto;
`;
