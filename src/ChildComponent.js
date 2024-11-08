import { useEffect, useState } from "react";

import "./ChildComponent.css";

function ChildComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      setData(data.results);
    }

    fetchData();
  }, []);

  console.log(data)
  return (
    <div>
      {data.map((item) => (
        <div key={item.name} className="data-item">
          <h3>{item.name}</h3>
          <p>Height: {item.height}</p>
          <p>Mass: {item.mass}</p>
          <p>Hair Color: {item.hair_color}</p>
        </div>
      ))}
    </div>
  );
}

export default ChildComponent;
