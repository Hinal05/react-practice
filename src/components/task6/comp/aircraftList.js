import React from "react";

function AircraftList({items}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Aircraft Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AircraftList;