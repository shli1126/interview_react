import MenuList from "./menu-list";
import { useState } from "react";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  const handleToggleChildren = (getCurrentlable) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlable]: !displayCurrentChildren[getCurrentlable],
    });
  };
  console.log(displayCurrentChildren);
  return (
    <li>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span
            onClick={() => handleToggleChildren(item.label)}
            style={{ cursor: "pointer" }}
          >
            {displayCurrentChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
