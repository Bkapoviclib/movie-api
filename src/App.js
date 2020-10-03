import React, { useState, useEffect } from "react";

function App(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  return (
    <div className="App">
      {data.map((item) => {
        return (
          <p key={item.id}>
            {item.name}
            {item.username}
          </p>
        );
      })}
    </div>
  );
}

export default App;
