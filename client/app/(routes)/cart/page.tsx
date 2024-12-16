"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import NoResults from "@/components/ui/no-results";

import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const CartPage = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black text-black dark:text-white">
            Shopping Cart
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12  lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <NoResults message="No items added to cart" />
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
