import React, { useState } from "react";
import "./Item.css";
export default function Item(props) {
  const { title, description } = props;
  const [show, setShow] = useState(false);
  return (
    <section>
      <div className="content">
        <h4>{title}</h4>
        <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      </div>
      {show && <p>{description}</p>}
    </section>
  );
}
