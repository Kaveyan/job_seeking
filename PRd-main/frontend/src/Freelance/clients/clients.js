import React from "react";
import { clientList } from "./clientList";
import ClientItem from "../clientItem/clientItem"; // Capitalize the component name
import "./clients.css";
export default function Clients() {
  return (
    <div className="menu">

      <h1 className="menuTitle">Clients for you</h1>  
      <div className="clientList">
        {clientList.map((item, key) => {
          return (
            <ClientItem
              key={key}
              image={item.image}
              name={item.name}
              skill={item.skill}
            />
          );
        })}
      </div>
    </div>
  );
}
