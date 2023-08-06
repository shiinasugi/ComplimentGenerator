import React from "react";
import svgfile from "../static/menuIcon.svg";
const navBarItems = [
  {
    content: "Home",
    to: "/",
  },
  {
    content: "Mission",
    to: "/mission",
  },
  {
    content: "About Us",
    to: "/about",
  },
];

const MenuItemComp = ({ item }) => {
  return (
    <div className="col">
      <a href={item.to} style={{ textDecoration: "none", color: "white" }}>
        {item.content}
      </a>
    </div>
  );
};

export default function Header() {
  return (
    <div
      style={{
        background: "#019D9F",
        padding: 24,
        width: "100%",
        margin: 0,
      }}
    >
      <div className="container">
        <div className="row align-items-md-center">
          <div className="col-1">
            <img src={svgfile} width={40} height={40} alt="icon" />
          </div>
          <div className="col" style={{ fontSize: 20, marginLeft: -16 }}>
            <b>Generate a Kind Message</b>
          </div>
          <div className="col">
            <div className="row">
              {navBarItems.map((e, i) => {
                return <MenuItemComp item={e} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
