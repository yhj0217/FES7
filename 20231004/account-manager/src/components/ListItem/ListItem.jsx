import React from "react";

export default function ListItem({ item }) {
  return (
    <tr>
      <td>name : {item.name} </td>
      <td>₩ {item.price}</td>
    </tr>
  );
}
