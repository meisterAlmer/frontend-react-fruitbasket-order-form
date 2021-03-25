import React, { useState } from "react";
import FruitItem from "./FruitItem";

function FruitList() {
  const [fruitOrder, setFruitOrder] = useState({
    strawberry: 0,
    banana: 0,
    apple: 0,
    kiwi: 0,
  });

  const resetOrders = function () {
    setFruitOrder({
      ...fruitOrder,
      strawberry: 0,
      banana: 0,
      apple: 0,
      kiwi: 0,
    });
  };

  return (
    <>
      <section className="fruit-section">
        <h1>Fruitmand bezorgservice</h1>

        <FruitItem
          fruit={{
            name: "Aardbeien",
            icon: "🍓",
          }}
          fruitType="strawberry"
          fruitOrder={fruitOrder}
          setFruitOrder={setFruitOrder}
        />

        <FruitItem
          fruit={{
            name: "Bananen",
            icon: "🍌",
          }}
          fruitType="banana"
          fruitOrder={fruitOrder}
          setFruitOrder={setFruitOrder}
        />

        <FruitItem
          fruit={{
            name: "Appels",
            icon: "🍎",
          }}
          fruitType="apple"
          fruitOrder={fruitOrder}
          setFruitOrder={setFruitOrder}
        />

        <FruitItem
          fruit={{
            name: "Kiwi's",
            icon: "🥝",
          }}
          fruitType="kiwi"
          fruitOrder={fruitOrder}
          setFruitOrder={setFruitOrder}
        />

        <button className="form-button" type="button" onClick={resetOrders}>
          Reset orders
        </button>
      </section>
    </>
  );
}

export default FruitList;
