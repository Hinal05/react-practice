import React from "react";

function AircraftList({items}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Aircraft Name</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.country}</td>
            <td>
              <input type='button' value='Edit' />
              <input type='button' value='Delete' />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AircraftList;