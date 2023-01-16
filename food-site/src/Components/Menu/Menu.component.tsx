import axios from "axios";
import React from "react";
import "./Menu.style.css";

type Props = { dishes: [] };

const Menu = (props: { dishes: any }) => {
  return (
    <div className="row">
      <div className="column">
        {" "}
        {props.dishes.map((dish: any) => (
          <>
            <img src={dish.imgUrl} />
            <h3>
              {dish.name} - <span>{dish.price}</span>{" "}
            </h3>
            <button>Add to cart</button>
          </>
        ))}
      </div>
      <button className="toCart">To your cart</button>
    </div>
  );
};

export default Menu;
