import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let Fruits = [
    { name: "apple", checked: false },
    { name: "Mango", checked: false },
    { name: "Banana", checked: false },
  ];

  const [FruitsArr, setFruitsArr] = useState(Fruits);

  return (
    <div>
      <ol>
        {FruitsArr.map((v, i) => {
          return (
            <>
              <li key={i}>{v.name}</li>
              <input
                onClick={() => {
                  setFruitsArr(
                    FruitsArr.map((va, ind) => {
                      // eslint-disable-next-line no-unused-expressions
                      return ind === i ? { ...va, checked: !va.checked } : va;
                    })
                  );
                }}
                type="checkbox"
                checked={FruitsArr[i].checked}
              ></input>
            </>
          );
        })}
      </ol>
      <button
        onClick={() => {
          setFruitsArr(FruitsArr.filter((f) => f.checked === false));
        }}
      >
        Remove Selected
      </button>
    </div>
  );
}

export default App;
