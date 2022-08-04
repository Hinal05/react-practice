import React, { useState } from "react";
import users from './users';
import Table from "./table";
import './search.css';

function Search() {
  const [query, setQuery] = useState("");
  // step1
  // console.log(users.filter(user=>user.first_name.toLocaleLowerCase().includes("fe")));

  // step2
  // const search = (data) => {
  //   return data.filter((item) => item.first_name.toLowerCase().includes(query) ||
  //   item.last_name.toLowerCase().includes(query) ||
  //   item.email.toLowerCase().includes(query));
  // }

  // step3
  const keys = ["first_name", "last_name", "email"];
  // console.log(users[0]["email"]);
  const search = (data) => {
    return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)));
  }

  return (
    <div className="search-wrap">
      <input type="text" placeholder="search..." className="search" onChange={(e) => setQuery(e.target.value)} />
      {/* step1 */}
      {/* <ul className="list">
        {users.filter((user)=>user.first_name.toLocaleLowerCase().includes(query)).map(user => (
          <li className="listItem" key={user.id}>{user.first_name}</li>
        ))}
      </ul> */}

      {/* step2,3 */}
      <Table data={search(users)} />
    </div>
  )
}

export default Search;