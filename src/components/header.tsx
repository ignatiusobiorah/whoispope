import afrodroid from "../img/afrodroid1.png";
import "../styles/header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { navTitle } from "../data/nav.data";

const Header = () => {
  return (
    <div className="navBar">
      <div className="logoImg">
        <img src={afrodroid} alt="" />
      </div>

      <ul className="navList">
        {navTitle.map<React.ReactElement>((item) => (
          <li key={item.id} className={item.className}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>

      <button className="navBtn">Contact me</button>
    </div>
  );
};

export default Header;
