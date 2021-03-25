import React from "react";

function FruitItem({ fruit, fruitType, fruitOrder, setFruitOrder }) {
  const handleClick = function (value) {
    setFruitOrder({
      ...fruitOrder,
      [fruitType]: fruitOrder[fruitType] + value,
    });
  };

  return (
    <article>
      <p className="fruit-label">
        {fruit.icon} {fruit.name}
      </p>
      <button onClick={() => handleClick(-1)} disabled={!fruitOrder[fruitType]}>
        -
      </button>
      <p
        className={
          fruitOrder[fruitType]
            ? "fruit-order-green fruit-order"
            : "fruit-order"
        }
      >
        {fruitOrder[fruitType]}
      </p>
      <button onClick={() => handleClick(1)}>+</button>
    </article>
  );
}

export default FruitItem;
