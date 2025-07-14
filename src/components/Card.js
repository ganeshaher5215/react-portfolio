import React from "react";

export default function Card({ icon, text }) {
  return (
    <div className="card">
      {icon} {text}
    </div>
  );
}
