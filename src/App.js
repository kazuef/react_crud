import './App.css';
import { useState, useRef } from "react";

function App() {
  const [names, setNames] = useState([]);

  const namesRef = useRef();

  // // IDで検索する
  // const handleSearchName = () => {
  //   const params = namesRef.current.value;

  //   if (params === "") {
  //     fetch("http://localhost:80/api/customers")
  //       .then((res) => res.json())
  //       .then((json) => setNames(json))
  //       .catch((error) => console.error("エラーです", error));
  //   } else {
  //     const query = new URLSearchParams(params);
  //     console.log(query);
  //     fetch(`http://localhost:80/api/customers?${query}`)
  //       .then((res) => res.json())
  //       .then((json) => setNames(json))
  //       .catch((error) => console.error("エラーです", error));

  //     namesRef.current.value = null;
  //   }
  // };

  const handleSearchName = () => {
    const params = namesRef.current.value;
    const query = new URLSearchParams(params);
    fetch(`http://localhost:80/api/customers/${query}`)
      .then((res) => res.json())
      .then((json) => setNames(json))
      .then(console.log(names))
      .catch((error) => console.error("エラーです", error));
  }

  return (
    <div className="App">
      <div>
        {names.title}
      </div>
      <input type="text" ref={namesRef} />
      <button onClick={handleSearchName}>名前追加</button>
    </div>
  );
}

export default App;
