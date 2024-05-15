// ItemTable.js
import React from 'react';

const ItemTable = ({ items }) => (
  <table>
    <thead>
      <tr>
        <th>Item Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={item.itemId}>
          <td>{item.itemName}</td>
          <td>{item.itemDescription}</td>
          <td>{item.itemPrice}</td>
          <td>{item.itemQuantity}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ItemTable;
