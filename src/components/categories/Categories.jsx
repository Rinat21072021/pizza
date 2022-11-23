import React from "react";

export const Categories = () => {
  const [category, SetCategory] = React.useState("Все");
  const itemCategory = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const handelPickCategory = (i) => {
    SetCategory(i);
  };
  return (
    <div className="categories">
      <ul>
        {itemCategory.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => handelPickCategory(index)}
              className={category === index ? "active" : ""}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
