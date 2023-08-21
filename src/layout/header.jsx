import React from "react";
import svgfile from "../static/menuIcon.svg";

const navBarItems = [
  {
    content: "Home",
    to: "/",
  },
  {
    content: "Mission",
    to: "/Mission",
  },
  {
    content: "About Us",
    to: "/About",
  },
];

const MenuItemComp = ({ item }) => {
  return (
    <div className="col-2">
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
        position: "fixed",
      }}
    >
      <div className="container">
        <div className="row align-items-md-center justify-content-md-space-between">
          <div className="col-1">
            <img src={svgfile} width={40} height={40} alt="icon" />
          </div>
          <div
            className="col"
            style={{ fontSize: 20, marginLeft: -16, color: "white" }}
          >
            <b>Generate a Kind Message</b>
          </div>
          <div className="col justify-content-md-flex-end">
            <div className="row justify-content-md-end">
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
