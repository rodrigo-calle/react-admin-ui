import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item">
          <span className="title">{item.title.toUpperCase()}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem">
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
