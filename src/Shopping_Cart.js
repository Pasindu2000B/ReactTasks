import { useState } from "react";

function Shpping_Cart() {
  let Products = [
    { name: "Milk Powder", Price: 290, Quantity: 0 },
    { name: "Bread", Price: 50, Quantity: 0 },
    { name: "Eggs", Price: 30, Quantity: 0 },
    { name: "Butter", Price: 120, Quantity: 0 },
  ];

  const [ProductsArr, SetProductsArr] = useState(Products);

  return (
    <>
      <h1>Product Page</h1>
      {ProductsArr.map((product, index) => {
        return (
          <div>
            <p>{product.name}</p>
            <p>{product.Price}</p>
            <input value={product.Quantity}></input>
            <button
              onClick={() => {
                SetProductsArr(
                  ProductsArr.map((p, i) => {
                    return i === index ? { ...p, Quantity: p.Quantity + 1 } : p;
                  })
                );
              }}
            >
              Add
            </button>
            <button
              onClick={() => {
                SetProductsArr(
                  ProductsArr.map((p, i) => {
                    return i === index ? { ...p, Quantity: p.Quantity - 1 } : p;
                  })
                );
              }}
            >
              Remove
            </button>

            <button
              onClick={() => {
                SetProductsArr(
                  ProductsArr.map((p, i) => {
                    return i === index ? { ...p, Quantity: 0 } : p;
                  })
                );
              }}
            >
              Reset
            </button>
          </div>
        );
      })}
      <>--------------------------------------------------</>
      <h2>
        {ProductsArr.reduce((total, p) => {
          return (total = total + p.Quantity * p.Price);
        }, 0)}
      </h2>
    </>
  );
}

export default Shpping_Cart;
