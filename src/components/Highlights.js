import React from "react";
import Card from "./Card";

export default function Highlights({ items }) {
  return (
    <div className="highlights">
      <h2>🌟 Highlights</h2>
      <div className="cards">
        {items.map((item, index) => (
          <Card key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
}
