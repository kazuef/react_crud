import './App.css';
import DisplayAll from './DisplayAll';
import { useState, useRef } from "react";

function App() {
  const [names, setNames] = useState([]);
  const [params, setParams] = useState([]);

  const namesRef = useRef();

  // 全件検索
  const handleSearchAll = () => {
    fetch("http://localhost:80/api/customers")
      .then((res) => res.json())
      .then((json) => setNames(json))
      .catch((error) => console.error("エラーです", error));

    setParams(null);
  };
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

  const handleSearchId = () => {
    const params = namesRef.current.value;
    const query = new URLSearchParams(params);

    let tempArray = [];

    fetch(`http://localhost:80/api/customers/${query}`)
      .then((res) => res.json())
      .then((json) => tempArray=json)
      .then((json) => console.log(json))
      .then((json) => setNames(json))
      .then(console.log(names))
      .catch((error) => console.error("エラーです", error));

    namesRef.current.value = null;
  };

  return (
    <div className="App">
      <input type="text" ref={namesRef} />
      <button onClick={handleSearchId}>ID検索</button>
      <button onClick={handleSearchAll}>全件検索</button>
      {/* <div>
        {names.title}
      </div> */}
      <DisplayAll names={names} params={params} />
    </div>
  );
}

export default App;
