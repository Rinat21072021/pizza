import React from "react";

import "./scss/app.scss";

import { Header } from "./components/header/Header";
import { Categories } from "./components/categories/Categories";
import { Sort } from "./components/sort/Sort";
import { PizzaBlock } from "./components/pizza-block/PizzaBlock";
import pizzas from "./accept/pizzas.json";

function App() {
  console.log(pizzas);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((item) => {
              return (
                <PizzaBlock
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  sizes={item.sizes}
                  imageUrl={item.imageUrl}
                  types={item.types}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
